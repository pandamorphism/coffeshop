import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductBuilderComponent} from './product-builder/product-builder.component';
import {CounterComponent} from './counter/counter.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ExtrasPickerComponent} from './product-builder/extras-picker/extras-picker.component';

@NgModule({
  declarations: [ProductBuilderComponent, CounterComponent, ExtrasPickerComponent],
  exports: [ProductBuilderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ProductBuilderModule {
}
