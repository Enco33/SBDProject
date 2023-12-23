import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SbdMaincompComponent} from "./sbd-maincomp/sbd-maincomp.component";
import {SbdTableComponent} from "./sbd-table/sbd-table.component";
import {SbdPercardComponent} from "./sbd-percard/sbd-percard.component";
import {SbdExamplesComponent} from "./sbd-examples/sbd-examples.component";
import {CommonModule} from "@angular/common";



const routes: Routes = [
  {
    path:'main',
    component: SbdMaincompComponent
  },
  {
    path:'table',
    component: SbdTableComponent
  },
  {
    path:'personal',
    component: SbdPercardComponent
  },
  {
    path:'examples',
    component: SbdExamplesComponent
  },
  {
    path:'**',
    redirectTo: '',
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
