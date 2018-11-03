import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './menu/view/product-list/product-list.component';
import {NgModule} from '@angular/core';
import {MenuModule} from './menu/menu.module';

export const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: '**', component: ProductListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    MenuModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
