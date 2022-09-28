import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-components/todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {TodosService} from "./todos-services/todos.service";


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
