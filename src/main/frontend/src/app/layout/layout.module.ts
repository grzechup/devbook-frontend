import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../components/header/header.component";
import {BoardModule} from "./board/board.module";
import {NullpointerModule} from "./nullpointer/nullpointer.module";
import {NanoblogModule} from "./nanoblog/nanoblog.module";
import {JobOffersModule} from "./job-offers/job-offers.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    FlexLayoutModule,
    LayoutRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    BoardModule,
    NullpointerModule,
    NanoblogModule,
    JobOffersModule
  ],
  providers: [],
  entryComponents: []
})
export class LayoutModule { }
