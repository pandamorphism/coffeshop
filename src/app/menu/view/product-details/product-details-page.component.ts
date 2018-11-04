import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ProductDetails} from '../../../shared/model/model';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-product-details',
  template: '<app-product-builder [product]="productDetails"></app-product-builder>',
  styleUrls: ['./product-details-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPageComponent implements OnInit {
  productDetails: ProductDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: { productDetails: ProductDetails }) {
  }

  ngOnInit() {
    this.productDetails = this.passedData.productDetails;
  }


}
