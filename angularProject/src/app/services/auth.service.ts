import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _route: Router) { }
  checkUserNameAndPassword(username: string, pwd: string){
    if(username == "admin" && pwd == "123"){
      localStorage.setItem('username',"admin")
      return true;
    }
    else{
      this._route.navigate(['/login']);
      return false;
    }
  }
}
