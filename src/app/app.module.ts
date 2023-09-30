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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
