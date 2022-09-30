import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../../interfaces/todos.interface";
import {urls} from "../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(urls.todos)
  }

  create(todo:ITodo): Observable<ITodo> {
    return this.httpClient.post<ITodo>(urls.todos, todo)
  }
  update(id:number, todo:ITodo): Observable<ITodo> {
    return this.httpClient.put<ITodo>(`${urls.todos}/id`, todo)
  }

  delete(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.todos}/id`)
  }
}
