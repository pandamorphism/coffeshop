import {TestBed} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Provider} from '@angular/core';
import {ENDPOINTS} from '../../shared/service/endpoints.config';

const TestEndpointProvider: Provider = {provide: ENDPOINTS, multi: true, useValue: {product: '/mockProduct'}};
let httpMock: HttpTestingController;
let victim: MenuService;
describe('MenuService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TestEndpointProvider]
      });
      httpMock = TestBed.get(HttpTestingController);
      victim = TestBed.get(MenuService);
    }
  );

  it('should be created', () => {
    expect(victim).toBeTruthy();
  });
});
