import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./component/header/header.component";
import {BoardModule} from "./board/board.module";
import {NullpointerModule} from "./nullpointer/nullpointer.module";
import {NanoblogModule} from "./nanoblog/nanoblog.module";
import {JobOffersModule} from "./job-offers/job-offers.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {FriendsListModule} from "./friends-list/friends-list.module";
import {IgxDialogModule} from "igniteui-angular";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    IgxDialogModule,
    FlexLayoutModule,
    LayoutRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    BoardModule,
    NullpointerModule,
    NanoblogModule,
    JobOffersModule,
    FriendsListModule
  ],
  providers: [],
  exports: [],
  entryComponents: []
})
export class LayoutModule { }
