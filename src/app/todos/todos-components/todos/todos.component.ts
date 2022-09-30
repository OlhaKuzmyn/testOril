import { Component, OnInit } from '@angular/core';
import {ITodo} from "../../../interfaces/todos.interface";
import {TodosService} from "../../todos-services/todos.service";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../todos-services/data.service";
import {IUser} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  form: FormGroup
  todos: ITodo[]
  users: IUser[]
  todoForUpdate: ITodo | null;
  todoForDelete: ITodo | null

  constructor(private todosService:TodosService, private dataService:DataService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.todosService.getAll().subscribe(value => this.todos = value)
    this.todosService.getUsers().subscribe(value => this.users = value)
    this.dataService.updTodo.subscribe(value => {
      this.todoForUpdate = value
      if (this.todoForUpdate) {
        this.form.setValue({userId: this.todoForUpdate.userId, title: this.todoForUpdate.title, completed: this.todoForUpdate.completed})
      }
    })
    this.dataService.delTodo.subscribe(value => {
      this.todoForDelete = value
      if (this.todoForDelete) {
        this.todos = this.todos.filter(todo => todo.id !== this.todoForDelete?.id)
      }
    })

  }

  _createForm():void {
    this.form = new FormGroup({
      userId: new FormControl(null),
      title: new FormControl(null),
      completed: new FormControl(false)
    })
  }

  saveTodo() {
    // console.log(this.form.value);
    let newTodo = this.form.getRawValue();
    if (newTodo.completed === null) {
      newTodo.completed = false
    }
    // console.log('check', todo);
    if (this.todoForUpdate){
      this.todosService.update(this.todoForUpdate!.id!, newTodo).subscribe(response => {
        console.log(response);
        this.todos = this.todos.map(todo => todo.id === this.todoForUpdate!.id! ? newTodo : todo)
      })
    } else {
      this.todosService.create(newTodo).subscribe(()=>{
        newTodo = {id: this.todos.length+1, ...newTodo}
        // console.log(todo)
        this.form.reset()
        this.todos.push(newTodo)
      })
    }

  }
}
