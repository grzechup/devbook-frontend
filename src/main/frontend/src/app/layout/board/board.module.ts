import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import {BoardRoutingModule} from "./board-routing.module";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {BoardCardComponent} from "./board-card/board-card.component";




@NgModule({
  declarations: [
    BoardComponent,
    BoardCardComponent],
  imports: [
    BoardRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    FlexModule
  ],
  exports: [
    BoardCardComponent
  ],
  entryComponents:[BoardCardComponent],
})
export class BoardModule { }
