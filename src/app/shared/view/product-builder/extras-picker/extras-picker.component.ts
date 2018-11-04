import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {Extra} from '../../../model/model';
import {byExtraId, IndexedOption} from '../product-builder.component';

@Component({
  selector: 'app-extras-picker',
  templateUrl: './extras-picker.component.html',
  styleUrls: ['./extras-picker.component.css', '../product-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtrasPickerComponent implements OnInit, OnChanges {
  @Input() extras: Extra[] = [];
  @Input() validationFailed: { extraId: number }[] = [];
  @Output() replaceOption: EventEmitter<IndexedOption> = new EventEmitter();
  @Output() addOption: EventEmitter<IndexedOption> = new EventEmitter();
  @Output() removeOption: EventEmitter<IndexedOption> = new EventEmitter();
  @Output() removeExtra: EventEmitter<{ extraId: number }> = new EventEmitter();
  radioButtonGroupState: { [key: number]: any } = {};

  constructor() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    const validationFailed = changes['validationFailed'] && !changes['validationFailed'].firstChange;
    console.log('validation failed', validationFailed);
  }

  ngOnInit() {
  }

  replace(extraId: number, optionId: number) {
    this.validationFailed = [];
    this.replaceOption.emit({extraId, optionId});
  }

  addOrRemove(extraId: number, optionId: number, action: 'add' | 'remove') {
    // TC39,  where is my pattern matching, huh ?
    switch (action) {
      case  'add':
        this.addOption.emit({extraId, optionId});
        break;
      case 'remove':
        this.removeOption.emit({extraId, optionId});
    }
  }

  wasFailed(extraId: number): boolean {
    return !!this.validationFailed.find(byExtraId({extraId}));
  }

  reset(extraId: number) {
    this.radioButtonGroupState[extraId] = null;
    this.removeExtra.next({extraId});
  }
}
