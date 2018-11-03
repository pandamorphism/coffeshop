import {Injectable} from '@angular/core';
import {API} from '../../shared/service/endpoints.config';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Menu, ProductDetails} from '../../shared/model/model';
import {shareReplay, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCache$: Observable<Menu>;
  private productDetailsCache$: Observable<ProductDetails>;

  constructor(private api: API, private http: HttpClient) {
  }

  getMenu$(): Observable<Menu> {
    if (this.menuCache$) {
      return this.menuCache$;
    }
    const menuEndpoint = this.api.resolve(this.api.endPoints.menu);
    return this.menuCache$ = this.http.get<Menu>(menuEndpoint).pipe(
      shareReplay(1)
    ); // todo: error handling
  }

  /**
   * Grab All product details from .json file, cache it and returns product by given id, or throw Error
   * @param id - obvious, its a product id
   */
  getProductDetails$(id: number): Observable<ProductDetails> {
    if (!this.productDetailsCache$) {
      const productDetailsEndpoint = this.api.resolve(this.api.endPoints.products);
      this.productDetailsCache$ = this.http.get<ProductDetails>(productDetailsEndpoint)
        .pipe(
          shareReplay(1)
        );
    }

    return this.productDetailsCache$.pipe(
      switchMap(availableProduct => availableProduct.id === id ? of(availableProduct) :
        throwError(`Cant find product details with id: ${id}`)));
  }
}
