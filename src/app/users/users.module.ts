import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './users-components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./users-services/users.service";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
