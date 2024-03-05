import {Page1Module} from './pages/page1/page1.module';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';
import {InfoComponent} from './pages/info/info.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "page1",
    pathMatch: "full"
  },
  {
    path: "page1",
    component: Page1Component,
    pathMatch: "full"
  },
  {
    path: "page2",
    component: Page2Component,
    pathMatch: "full"
  },
  {
    path: "page3",
    component: Page3Component,
    pathMatch: "full"
  },
  {
    path: "info",
    component: InfoComponent,
    pathMatch: "full"
  },
  // {

  //   path: "page1",
  //   loadChildren: () =>
  //     import("./pages/page1/page1.module").then(
  //       (m) => m.Page1Module
  //     ),
  // },
  // {

  //   path: "page2",
  //   loadChildren: () =>
  //     import("./pages/page2/page2.module").then(
  //       (m) => m.Page2Module
  //     ),
  // },
  // {

  //   path: "page3",
  //   loadChildren: () =>
  //     import("./pages/page3/page3.module").then(
  //       (m) => m.Page3Module
  //     ),
  // },
  // {

  //   path: "info",
  //   loadChildren: () =>
  //     import("./pages/info/info.module").then(
  //       (m) => m.InfoModule
  //     ),

  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
