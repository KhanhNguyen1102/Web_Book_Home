import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FindOneComponent } from './find-one/find-one.component';
import { ListHomeComponent } from './list-home/list-home.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";


@NgModule({
  declarations: [
    FindOneComponent,
    ListHomeComponent,
    CreateHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ]
})
export class HomeModule { }
