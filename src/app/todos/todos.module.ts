import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-components/todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {TodosService} from "./todos-services/todos.service";
import { TodoComponent } from './todos-components/todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
    imports: [
        CommonModule,
        TodosRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
