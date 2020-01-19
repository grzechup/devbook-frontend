import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobOffersComponent} from "./job-offers.component";



@NgModule({
  declarations: [JobOffersComponent],
  imports: [
    CommonModule
  ],
  exports: [JobOffersComponent]
})
export class JobOffersModule { }
