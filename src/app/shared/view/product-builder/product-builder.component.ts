import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductDetails} from '../../model/model';
import {Subject} from 'rxjs';
import {filter, takeUntil, tap} from 'rxjs/operators';
/* tslint:disable: interface-over-type-literal */
export type IndexedOption = { extraId: number, optionId: number };
// todo: i`d use ramda here
export const byExtraId: (something: { extraId: number }) => (another: { extraId: number }) => boolean =
  something => another => something.extraId === another.extraId;
export const equals: (item: IndexedOption, another: IndexedOption) => boolean =
  (item, another) => item.extraId === another.extraId && item.optionId === another.optionId;

export type Actions = {
  replaceOrAdd: (indexed: IndexedOption) => void,
  onAddOption: (event: IndexedOption) => void,
  onRemoveOption: (indexed: IndexedOption) => void,
  onRemoveExtra: ({extraId: number}) => void,
  produceSizeChanged: (size: number) => void
};


export const componentActions: Actions = {
  replaceOrAdd(indexed: IndexedOption) {
    if (this.selectedExtras.length === 0 || !this.selectedExtras.find(byExtraId(indexed))) {
      this.selectedExtras.push(indexed);
    } else {
      this.selectedExtras = this.selectedExtras.map(extra => extra.extraId === indexed.extraId ? indexed : extra);
    }
  },

  onAddOption($event: IndexedOption) {
    this.selectedExtras.push($event);
  },

  onRemoveOption(candidate: IndexedOption) {
    this.selectedExtras =
      this.selectedExtras
        .reduce((selected, current) => equals(current, candidate) ? selected : [...selected, current], []);
  },

  onRemoveExtra({extraId}) {
    this.selectedExtras =
      this.selectedExtras
        .reduce((selected, current) => current.extraId === extraId ? selected : [...selected, current], []);
  },

  produceSizeChanged(size: number) {
    this.size = size;
  }

};

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBuilderComponent implements OnInit, OnDestroy {
  size = 1;
  totalPrice: number;
  validationFailed: { extraId: number }[] = [];
  @Input()
  product: ProductDetails;
  @Output() buy: EventEmitter<{ size: number, productId: number, extras: IndexedOption[] }> = new EventEmitter();
  private selectedExtras: { extraId: number; optionId: number }[] = [];
  private execute$: Subject<{ action: keyof Actions, args: any[] }> = new Subject();
  private destroyed$: Subject<void> = new Subject();

  constructor() {
  }

  ngOnInit() {
    if (this.product) {
      this.recalculate();
    }

    this.execute$.pipe(
      filter(({action}) => action in componentActions && typeof componentActions[action] === 'function'),
      tap(({action, args}) => componentActions[action].apply(this, args)),
      tap(_ => this.recalculate()),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  processProduct() {
    if (this.checkRequiredWerePickedUp()) {
      this.buy.emit({size: this.size, productId: this.product.id, extras: this.selectedExtras});
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


  private recalculate() {
    this.totalPrice = this.size * (this.product.price +
      this.selectedExtras.reduce((total, option) => total + this.priceOf(option), 0));
  }

  // todo: memoization should be applied here, to replace scan with atomic get
  private priceOf(indexed: IndexedOption): number {
    const foundExtra = this.product.extras.find(extra => extra.id === indexed.extraId);
    if (foundExtra) {
      const foundOption = foundExtra.items.find(item => item.id === indexed.optionId);
      return foundOption && foundOption.price || 0;
    }
    return 0;
  }

  private checkRequiredWerePickedUp(): boolean {
    const required = this.product.extras.reduce((ids, extra) => extra.min > 0 ? [...ids, {extraId: extra.id}] : ids, []);
    const requiredNotChosen = required.filter(extraId => !this.selectedExtras.find(byExtraId(extraId)));
    if (requiredNotChosen.length > 0) {
      this.validationFailed = [...requiredNotChosen];
      return false;
    }
    this.validationFailed = [];
    return true;
  }
}
