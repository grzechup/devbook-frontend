import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './friends-list.component';
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {FlexModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {MatTooltipModule} from "@angular/material/tooltip";
import {IgxCardModule, IgxGridCommonModule, IgxListModule} from "igniteui-angular";



@NgModule({
  declarations: [FriendsListComponent],
  imports: [
    IgxListModule,
    MDBBootstrapModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    MatListModule,
    FlexModule,
    MatGridListModule,
    MatTooltipModule,
    IgxGridCommonModule,
    IgxCardModule
  ]
})
export class FriendsListModule { }
