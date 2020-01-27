import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import {BoardRoutingModule} from "./board-routing.module";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {BoardCardComponent} from "./board-card/board-card.component";
import {BoardPostDialogComponent} from "./board-post-dialog/board-post-dialog.component";
import {
  IgxButtonModule, IgxCardModule,
  IgxComboModule,
  IgxDatePickerModule,
  IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxListModule,
  IgxRippleModule,
  IgxTimePickerModule
} from "igniteui-angular";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";




@NgModule({
  declarations: [
    BoardComponent,
    BoardCardComponent,
    BoardPostDialogComponent],
  imports: [
    IgxIconModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    IgxComboModule,
    BoardRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    FlexModule,
    IgxDialogModule,
    MatInputModule,
    IgxCardModule,
    MatExpansionModule,
    IgxListModule,
  ],
  exports: [
    BoardCardComponent
  ],
  entryComponents:[BoardCardComponent],
})
export class BoardModule { }
