import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from "../category/category-list/category-list.component";
import {FindOneComponent} from "./find-one/find-one.component";
import {ListHomeComponent} from "./list-home/list-home.component";
import {CreateHomeComponent} from "./create-home/create-home.component";

const routes: Routes = [
  {
    path :'findOne/:id',
    component: FindOneComponent
  },
  {
    path :'findAll',
    component: ListHomeComponent
  },
  {
    path :'create',
    component: CreateHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
