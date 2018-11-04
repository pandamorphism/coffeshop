import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './view/product-list/product-list.component';
import {CoffeeEndpoints, ENDPOINTS} from '../shared/service/endpoints.config';
import {MaterialModule} from '../shared/view/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductDetailsPageComponent} from './view/product-details/product-details-page.component';
import {ProductBuilderComponent} from '../shared/view/product-builder/product-builder.component';

const api: CoffeeEndpoints = {
  menu: '/menu.json',
  products: '/product.json'
};
const CoffeeEndpointsProvider: Provider = {provide: ENDPOINTS, multi: true, useValue: api};


@NgModule({
  declarations: [ProductListComponent, ProductDetailsPageComponent, ProductBuilderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [CoffeeEndpointsProvider],
  entryComponents: [ProductDetailsPageComponent]
})
export class MenuModule {
}
