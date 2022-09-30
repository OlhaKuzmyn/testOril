import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../users-services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;


  constructor(private usersService:UsersService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm():void {
    this.form = new FormGroup({
      name: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      street: new FormControl(null),
      suite: new FormControl(null),
      city: new FormControl(null),
      zipcode: new FormControl(null)

    })
  }

  signUp(): void {
    const formValue = this.form.getRawValue();
    const address = {street: formValue.street, suite: formValue.suite, city: formValue.city, zipcode: formValue.zipcode};
    delete formValue.street;
    delete formValue.suite;
    delete formValue.city;
    delete formValue.zipcode;
    const user = {...formValue, address: address};
    this.usersService.signUp(user).subscribe(()=>{
      this.router.navigate(['todos']).then()
    })
  }

}
