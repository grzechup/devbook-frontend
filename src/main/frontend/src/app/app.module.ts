import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "./security/authentication.service";
import { UserService } from "./services/user.service";
import { TokenStorageService } from "./security/token-storage.service";
import { AuthGuardService } from "./security/auth-guard.service";
import { AuthHtppInterceptorService } from "./security/jwt-auth-interceptor";
import { BoardService } from "./services/board.service";
import { HeaderComponent } from "./layout/component/header/header.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import {IgxGridModule} from "igniteui-angular";
import {NanoblogService} from "./services/nanoblog.service";
import {NullpointerService} from "./services/nullpointer.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IgxGridModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    TokenStorageService,
    AuthGuardService,
    BoardService,
    NanoblogService,
    NullpointerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHtppInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
