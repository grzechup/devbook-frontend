import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NullpointerComponent} from "./nullpointer.component";
import { NullpointerPostCardComponent } from './nullpointer-post-card/nullpointer-post-card.component';
import { NullpointerPostComponent } from './nullpointer-post/nullpointer-post.component';
import { NullpointerPostEditorComponent } from './nullpointer-post-editor/nullpointer-post-editor.component';
import {IgxButtonModule, IgxCardModule, IgxListModule} from "igniteui-angular";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { NullpointerPostFormComponent } from './nullpointer-post-form/nullpointer-post-form.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material.module";




@NgModule({
  declarations: [NullpointerComponent, NullpointerPostCardComponent, NullpointerPostComponent, NullpointerPostEditorComponent, NullpointerPostFormComponent],
  imports: [
    MaterialModule,
    MatIconModule,
    CommonModule,
    IgxCardModule,
    MatIconModule,
    FlexModule,
    MatInputModule,
    FormsModule,
    IgxButtonModule,
    RouterModule,
    IgxListModule
  ],
  exports: [NullpointerComponent],
})
export class NullpointerModule { }
