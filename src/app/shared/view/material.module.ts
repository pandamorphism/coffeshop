import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule,} from '@angular/material';


const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
