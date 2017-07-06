import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './app.component';
import {EmployeeComponent} from './employee-app.component';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
