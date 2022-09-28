import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'register', pathMatch: 'full'},
      {path: 'register', loadChildren: () => import('./users/users.module').then(value => value.UsersModule) },
      {path: 'todos', loadChildren: () => import('./todos/todos.module').then(value => value.TodosModule) },
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RouterModule
  ]
})
export class AppRoutingModule { }
