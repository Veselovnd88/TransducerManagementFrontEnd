import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {IndexComponent} from './layout/index/index.component';
import {MaterialModule} from "./material-module";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    MatListModule,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
