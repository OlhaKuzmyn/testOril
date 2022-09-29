import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces/user.interface";
import {Observable} from "rxjs";
import {urls} from "../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  signUp(user:IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }
}
