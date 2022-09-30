import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../interfaces/todos.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {TodosService} from "../../todos-services/todos.service";

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
  constructor(private todosService:TodosService) {
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
    this.form.setValue({userId: todo.userId, title: todo.title, completed: todo.completed})
  }

  del(id: number) {
    this.todosService.delete(id).subscribe(() => {

    })
  }

  updTodo() {
    let todo = this.form.getRawValue();
    this.todosService.update(this.todoForUpdate!.id!, this.form.value).subscribe(value => {
      this.form.reset()
    })
  }

}

