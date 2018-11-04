import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ProductDetails} from '../../../shared/model/model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IndexedOption} from '../../../shared/view/product-builder/product-builder.component';

@Component({
  selector: 'app-product-details',
  template: `
    <div class="wrapper">
      <button (click)="this.dialogRef.close()" mat-icon-button class="close">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <app-product-builder [product]="productDetails" (buy)="onProductBuy($event)">
      </app-product-builder>
    </div>

  `,
  styleUrls: ['./product-details-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPageComponent implements OnInit {
  productDetails: ProductDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: { productDetails: ProductDetails },
              public dialogRef: MatDialogRef<ProductDetailsPageComponent>) {
  }

  ngOnInit() {
    this.productDetails = this.passedData.productDetails;
  }


  onProductBuy($event: { size: number; productId: number; extras: IndexedOption[] }) {
    console.group('Order Placed To Basket');
    console.log('This should be thrown to store');
    console.log('Details: %O', $event);
    console.groupEnd();
    this.dialogRef.close();
  }
}
