/* tslint:disable: interface-over-type-literal */
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {environment} from '../../../environments/environment';

// describe all available endpoints in the app, might be CoffeeEndpoints & AuthEndpoints, etc...
export type Endpoints = CoffeeEndpoints;
export type CoffeeEndpoints = {
  menu: string;
  products: string;
};

// type OR, might be  | CoffeEndoints | AuthEndpoints, etc...
export const ENDPOINTS = new InjectionToken<CoffeeEndpoints>('application.endpoints');

/**
 * Generic purpose service, use it in specific services to retrieve endpoints
 */
@Injectable({providedIn: 'root'})
export class API {
  private readonly baseUrl = environment.BASE_API_URL;
  endPoints: Endpoints;

  constructor(@Inject(ENDPOINTS) private _endPoints) {
    this.endPoints = _endPoints.reduce((all, endpoint) => ({...all, ...endpoint}), {});
  }

  resolve(path: string) {
    return `${this.baseUrl}${path}`;
  }

}
