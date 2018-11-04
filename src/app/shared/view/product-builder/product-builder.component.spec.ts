import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductBuilderComponent} from './product-builder.component';
import {MaterialModule} from '../material.module';

describe('ProductbuilderComponent', () => {
  let component: ProductBuilderComponent;
  let fixture: ComponentFixture<ProductBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ProductBuilderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
