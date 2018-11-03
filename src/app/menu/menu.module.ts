import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './view/product-list/product-list.component';
import {CoffeeEndpoints, ENDPOINTS} from '../shared/service/endpoints.config';

const api: CoffeeEndpoints = {
  menu: '/menu.json',
  products: '/products.json'
};
const CoffeeEndpointsProvider: Provider = {provide: ENDPOINTS, multi: true, useValue: api};


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule
  ],
  providers: [CoffeeEndpointsProvider]
})
export class MenuModule {
}
