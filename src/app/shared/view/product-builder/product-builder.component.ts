import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductDetails} from '../../model/model';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBuilderComponent implements OnInit {
  size = 1;
  totalPrice: number;
  @Input()
  product: ProductDetails;

  constructor() {
  }

  ngOnInit() {
    if (this.product) {
      this.recalculate();
    }
  }

  produceSizeChanged(size: number) {
    this.size = size;
    this.recalculate();
  }

  private recalculate() {
    this.totalPrice = this.size * this.product.price;
  }
}
