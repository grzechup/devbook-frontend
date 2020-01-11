import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BoardComponent} from "../layout/board/board.component";
import {NanoblogComponent} from "../layout/nanoblog/nanoblog.component";
import {NullpointerComponent} from "../layout/nullpointer/nullpointer.component";
import {JobOffersComponent} from "../layout/job-offers/job-offers.component";

const routes: Routes = [
  { path: 'board', component: BoardComponent},
  { path: 'nullpointer', component: NullpointerComponent},
  { path: 'nanoblog', component: NanoblogComponent},
  { path: 'joboffers', component: JobOffersComponent},
  { path: '', redirectTo: '/board', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
