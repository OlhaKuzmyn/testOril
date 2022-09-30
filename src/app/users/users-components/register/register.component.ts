import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users-services/users.service";
import {Router} from "@angular/router";
import {RegEx} from "../../../constants/regex";

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
      name: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      username: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.pattern(RegEx.email)]),
      phone: new FormControl(null, [Validators.pattern(RegEx.phone)]),
      street: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      suite: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      city: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      zipcode: new FormControl(null, [Validators.pattern(RegEx.zipcode)])

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
