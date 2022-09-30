import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../interfaces/todos.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {TodosService} from "../../todos-services/todos.service";
import {DataService} from "../../todos-services/data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  form: FormGroup
  todoForUpdate: ITodo | null

  @Input()
  todo: ITodo
  constructor(private todosService:TodosService, private dataService:DataService) {
  }

  ngOnInit(): void {
  }


  upd(todo: ITodo): void {
    this.todoForUpdate = todo
    this.dataService.updTodo.next(todo)
  }

  del(id: number, todo:ITodo) {
    if (confirm(`Are you sure you want to delete this todo with title: ${todo.title}`)) {
      this.dataService.delTodo.next(todo)
    }
  }


}

