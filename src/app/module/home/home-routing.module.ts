import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from "../category/category-list/category-list.component";
import {FindOneComponent} from "./find-one/find-one.component";

const routes: Routes = [
  {
    path :'findOne/:id',
    component: FindOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
