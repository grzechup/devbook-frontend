import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule {
}
