import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './view/product-list/product-list.component';
import {CoffeeEndpoints, ENDPOINTS} from '../shared/service/endpoints.config';
import {MaterialModule} from '../shared/view/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

const api: CoffeeEndpoints = {
  menu: '/menu.json',
  products: '/products.json'
};
const CoffeeEndpointsProvider: Provider = {provide: ENDPOINTS, multi: true, useValue: api};


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [CoffeeEndpointsProvider]
})
export class MenuModule {
}
