import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NanoblogComponent} from "./nanoblog.component";
import { NanoblogCardComponent } from './nanoblog-card/nanoblog-card.component';
import {IgxButtonModule, IgxCardModule, IgxDialogModule, IgxListModule, IgxRippleModule} from "igniteui-angular";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { NanoblogPostDialogButtonComponent } from './nanoblog-post-dialog-button/nanoblog-post-dialog-button.component';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [NanoblogComponent, NanoblogCardComponent, NanoblogPostDialogButtonComponent],
  imports: [
    CommonModule,
    IgxCardModule,
    MatExpansionModule,
    IgxListModule,
    MatIconModule,
    FormsModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxRippleModule,
    FlexModule
  ],
  exports: [NanoblogComponent]
})
export class NanoblogModule { }
