import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";

const routes: Routes = [
  {
    path:"category",
    loadChildren :() => import ('./module/category/category.module').then(module =>module.CategoryModule)
  },{
    path:"homes",
    loadChildren :() => import ('./module/home/home.module').then(module =>module.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
