import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NullpointerComponent} from "./nullpointer.component";



@NgModule({
  declarations: [NullpointerComponent],
  imports: [
    CommonModule
  ],
  exports: [NullpointerComponent],
})
export class NullpointerModule { }
