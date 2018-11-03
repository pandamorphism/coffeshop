import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {MenuService} from '../../service/menu.service';
import {MaterialModule} from '../../../shared/view/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FlexLayoutModule],
      declarations: [ProductListComponent],
      providers: [{
        provide: MenuService, useValue: {
          getMenu$: () => {
          }
        }
      }]
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
