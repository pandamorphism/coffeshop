import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductDetails} from '../../model/model';
/* tslint:disable: interface-over-type-literal */
export type IndexedOption = { extraId: number, optionId: number };
// todo: i`d use ramda here
export const byExtraId: (something: IndexedOption) => (another: IndexedOption) => boolean =
  something => another => something.extraId === another.extraId;
export const equals: (item: IndexedOption, another: IndexedOption) => boolean =
  (item, another) => item.extraId === another.extraId && item.optionId === another.optionId;

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBuilderComponent implements OnInit {
  size = 1;
  totalPrice: number;
  @Input()
  product: ProductDetails;
  private selectedExtras: { extraId: number; optionId: number }[] = [];

  constructor() {
  }

  ngOnInit() {
    if (this.product) {
      this.recalculate();
    }
  }

  produceSizeChanged(size: number) {
    this.size = size;
    this.recalculate();
  }

  replaceOrAdd(indexed: IndexedOption) {
    if (this.selectedExtras.length === 0 || !this.selectedExtras.find(byExtraId(indexed))) {
      this.selectedExtras.push(indexed);
    } else {
      this.selectedExtras = this.selectedExtras.map(extra => extra.extraId === indexed.extraId ? indexed : extra);
    }
    console.log('selected extras: %O', this.selectedExtras);
    this.recalculate();
  }

  onAddOption($event: IndexedOption) {
    this.selectedExtras.push($event);
    this.recalculate();
  }

  onRemoveOption(candidate: IndexedOption) {
    this.selectedExtras =
      this.selectedExtras
        .reduce((selected, current) => equals(current, candidate) ? selected : [...selected, current], []);
    this.recalculate();
  }

  private recalculate() {
    this.totalPrice = this.size * this.product.price +
      this.selectedExtras.reduce((total, option) => total + this.priceOf(option), 0);
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
}
