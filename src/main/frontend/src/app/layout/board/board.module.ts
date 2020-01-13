import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import {BoardRoutingModule} from "./board-routing.module";



@NgModule({
  declarations: [BoardComponent],
  imports: [
    BoardRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  exports:[],
  entryComponents:[]
})
export class BoardModule { }
