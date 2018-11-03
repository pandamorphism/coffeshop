import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Observable} from 'rxjs';
import {Menu} from '../../../shared/model/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  menu: Observable<Menu>;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menu = this.menuService.getMenu$();
  }

}
