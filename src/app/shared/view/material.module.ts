import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';


const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatRadioModule,
  FormsModule,
  MatRadioModule,
  MatInputModule,
  MatCheckboxModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
