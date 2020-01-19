import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "./security/authentication.service";
import {UserService} from "./services/user.service";
import {TokenStorageService} from "./security/token-storage.service";
import {AuthGuardService} from "./security/auth-guard.service";
import {AuthHtppInterceptorService} from "./security/jwt-auth-interceptor";
import {BoardService} from "./services/board.service";
import {HeaderComponent} from "./layout/component/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    TokenStorageService,
    AuthGuardService,
    BoardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHtppInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
