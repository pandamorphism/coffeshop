import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductDetailsPageComponent} from './product-details-page.component';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProductBuilderComponent} from '../../../shared/view/product-builder/product-builder.component';
import {MaterialModule} from '../../../shared/view/material.module';


describe('ProductDetailsComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {productDetails: {description: 'moar coffee please'}}}],
      declarations: [ProductDetailsPageComponent, ProductBuilderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
