import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FindOneComponent } from './find-one/find-one.component';
import { OrderComponent } from './order/order.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    FindOneComponent,
    OrderComponent,
    HomePageComponent,

  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
