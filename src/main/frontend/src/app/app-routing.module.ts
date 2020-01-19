import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from "./components/sign-up/sign-up.component";


const routes: Routes = [
  {path: 'site', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule)},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


