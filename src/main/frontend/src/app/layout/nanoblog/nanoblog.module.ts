import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NanoblogComponent} from "./nanoblog.component";



@NgModule({
  declarations: [NanoblogComponent],
  imports: [
    CommonModule
  ],
  exports: [NanoblogComponent]
})
export class NanoblogModule { }
