import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductDetails} from '../../model/model';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBuilderComponent implements OnInit {

  @Input()
  product: ProductDetails;

  constructor() {
  }

  ngOnInit() {
  }

}
