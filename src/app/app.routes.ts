import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './menu/view/product-list/product-list.component';
import {NgModule} from '@angular/core';
import {MenuModule} from './menu/menu.module';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';

export const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: '**', component: WelcomePageComponent}
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
