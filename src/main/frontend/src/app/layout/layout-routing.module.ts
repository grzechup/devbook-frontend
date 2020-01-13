import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {BoardComponent} from "./board/board.component";
import {NullpointerComponent} from "./nullpointer/nullpointer.component";
import {NanoblogComponent} from "./nanoblog/nanoblog.component";
import {JobOffersComponent} from "./job-offers/job-offers.component";
import {LayoutComponent} from "./layout.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'board', component: BoardComponent,
        loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
      },
      {
        path: 'nullpointer', component: NullpointerComponent,
        loadChildren: () => import('./nullpointer/nullpointer.module').then(m => m.NullpointerModule)
      },
      {
        path: 'nanoblog', component: NanoblogComponent,
        loadChildren: () => import('./nanoblog/nanoblog.module').then(m => m.NanoblogModule)
      },
      {
        path: 'joboffers', component: JobOffersComponent,
        loadChildren: () => import('./job-offers/job-offers.module').then(m => m.JobOffersModule)
      },
      {path: '', redirectTo: 'board', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
