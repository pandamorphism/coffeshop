import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {EMPTY, Observable, Subject} from 'rxjs';
import {HasNameAndId, Menu, ProductDetails} from '../../../shared/model/model';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, delay, filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ProductDetailsPageComponent} from '../product-details/product-details-page.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  menu: Observable<Menu>;
  private destroyed$: Subject<void> = new Subject();
  // get product details by id, as side effect can initiate dialog opening which render productDetails model
  private retrieveProductDetailsFlow: (id: number) => Observable<ProductDetails>;

  constructor(private menuService: MenuService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  /**
   * Describing of flow:
   * route params initiated retrieving product details by id:   id => ProductDetails
   * after successful retrieving of ProductDetails, attach sideEffect: OpenDialog and switch to return DialogRef.close flow
   * as a side effect of dialog closing return to product list
   */
  ngOnInit() {
    const toId: (something: HasNameAndId) => number
      = something => typeof something.id === 'string' ? parseInt(something.id, 10) : something.id;
    this.menu = this.menuService.getMenu$();
    this.retrieveProductDetailsFlow = id => this.menuService.getProductDetails$(id).pipe(
      catchError(err => {
        console.error(err); // or send to global error handler (out of scope)
        return EMPTY;
      }));
    this.route.params.pipe(
      filter(params => params.id !== undefined),
      map(toId),
      switchMap(id => this.retrieveProductDetailsFlow(id)
        .pipe(
          // i found that i should open dialog outside of current event loop to avoid ExpressionChangedAfterItWasChecked error
          // delay here until Angular team implemented this  https://github.com/angular/angular/issues/15634
          delay(0),
          switchMap(productDetails =>
            this.dialog.open(ProductDetailsPageComponent,
              {
                data: {productDetails},
                maxWidth: '17vw',
                minWidth: '300px',
                maxHeight: '90vh',
                panelClass: 'coffee-dialog'
              })
              .afterClosed()
              .pipe(tap(_ => this.router.navigate(['products'])))
          ),
        )
      ),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  viewDetails(id: number) {
    this.router.navigate(['products', id]);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
