import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Extra} from '../../../model/model';
import {IndexedOption} from '../product-builder.component';

@Component({
  selector: 'app-extras-picker',
  templateUrl: './extras-picker.component.html',
  styleUrls: ['./extras-picker.component.css', '../product-builder.component.css']
})
export class ExtrasPickerComponent implements OnInit {
  @Input() extras: Extra[] = [];
  @Output() replaceOption: EventEmitter<IndexedOption> = new EventEmitter();
  @Output() addOption: EventEmitter<IndexedOption> = new EventEmitter();
  @Output() removeOption: EventEmitter<IndexedOption> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  replace(extraId: number, optionId: number) {
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
}
