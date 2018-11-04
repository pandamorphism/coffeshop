import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input('val')
  value = 0;
  @Input()
  step = 1;
  @Input()
  min = 0;
  @Input()
  max = Number.MAX_VALUE;
  @Output()
  valueChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  increase() {
    this.value = Math.min(this.value + this.step, this.max);
    this.valueChanged.emit(this.value);
  }

  decrease() {
    this.value = Math.max(this.min, this.value - this.step);
    this.valueChanged.emit(this.value);
  }
}
