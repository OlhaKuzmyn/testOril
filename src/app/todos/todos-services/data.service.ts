import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ITodo} from "../../interfaces/todos.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  updTodo = new BehaviorSubject<ITodo | null>(null);

  delTodo = new BehaviorSubject<ITodo | null>(null)

}
