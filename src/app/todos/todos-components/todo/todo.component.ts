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
  t = [...Array(11).keys()]

  @Input()
  todo: ITodo
  constructor(private todosService:TodosService, private dataService:DataService) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm():void {
    this.form = new FormGroup({
      userId: new FormControl(null),
      title: new FormControl(null),
      completed: new FormControl(false)
    })
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

  // updTodo() {
  //   let todo = this.form.getRawValue();
  //   this.todosService.update(this.todoForUpdate!.id!, this.form.value).subscribe(value => {
  //     // state.users = state.users.map(user => user.id === action.payload.user_id ? action.payload.updUser : user)
  //     this.form.reset()
  //   })
  // }

}

