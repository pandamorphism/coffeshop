import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductBuilderComponent} from './product-builder/product-builder.component';
import {CounterComponent} from './counter/counter.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ProductBuilderComponent, CounterComponent],
  exports: [ProductBuilderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ProductBuilderModule {
}
