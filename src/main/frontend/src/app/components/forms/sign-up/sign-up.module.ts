import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up.component";
import {SignUpRoutingModule} from "./sign-up-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../material.module";



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SignUpRoutingModule,
    CommonModule
  ]
})
export class SignUpModule { }
