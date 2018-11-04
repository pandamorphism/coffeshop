import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasPickerComponent } from './extras-picker.component';
import {MaterialModule} from '../../material.module';

describe('ExtrasPickerComponent', () => {
  let component: ExtrasPickerComponent;
  let fixture: ComponentFixture<ExtrasPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ ExtrasPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
