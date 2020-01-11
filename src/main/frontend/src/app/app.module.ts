import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BoardComponent } from './layout/board/board.component';
import { NullpointerComponent } from './layout/nullpointer/nullpointer.component';
import { JobOffersComponent } from './layout/job-offers/job-offers.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { NanoblogComponent } from './layout/nanoblog/nanoblog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import {MaterialModule} from "./material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    NullpointerComponent,
    JobOffersComponent,
    UserProfileComponent,
    NanoblogComponent,
    LayoutComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
