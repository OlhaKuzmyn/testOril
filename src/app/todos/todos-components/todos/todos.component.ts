import { Component, OnInit } from '@angular/core';
import {ITodo} from "../../../interfaces/todos.interface";
import {TodosService} from "../../todos-services/todos.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  form: FormGroup
  todos: ITodo[]
  t = [...Array(11).keys()]

  constructor(private todosService:TodosService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.todosService.getAll().subscribe(value => this.todos = value)
  }

  _createForm():void {
    this.form = new FormGroup({
      userId: new FormControl(null),
      title: new FormControl(null),
      completed: new FormControl(false)
    })
  }

  addTodo() {
    // console.log(this.form.value);
    let todo = this.form.getRawValue();
    if (todo.completed === null) {
      todo.completed = false
    }
    // console.log('check', todo);
    this.todosService.create(todo).subscribe(()=>{
      todo = {id: this.todos.length+1, ...todo}
      // console.log(todo)
      this.form.reset()
      this.todos.push(todo)
    })

  }
}
