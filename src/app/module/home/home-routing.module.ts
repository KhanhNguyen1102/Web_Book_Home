import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from "../category/category-list/category-list.component";
import {FindOneComponent} from "./find-one/find-one.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ListHomeComponent} from "./list-home/list-home.component";

const routes: Routes = [
  {
    path :'findOne/:id',
    component: FindOneComponent
  },
  {
    path :'findALL',
    component: ListHomeComponent
  },
  {
    path :'',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
