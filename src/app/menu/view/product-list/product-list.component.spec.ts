import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {MenuService} from '../../service/menu.service';
import {MaterialModule} from '../../../shared/view/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FlexLayoutModule, RouterModule.forRoot([])],
      declarations: [ProductListComponent],
      providers: [{
        provide: MenuService, useValue: {
          getMenu$: () => {
          }
        },
      },
        {provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
