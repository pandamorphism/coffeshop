import {Injectable} from '@angular/core';
import {API} from '../../shared/service/endpoints.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from '../../shared/model/model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: API, private http: HttpClient) {
  }

  getMenu$(): Observable<Menu> {
    const menuEndpoint = this.api.resolve(this.api.endPoints.menu);
    return this.http.get<Menu>(menuEndpoint).pipe(tap(what => console.log('here come the %O', what))); // todo: error handling
  }
}
