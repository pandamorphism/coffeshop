import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';


const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
