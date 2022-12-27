import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }
  checkUser(uname, password){
    if (uname == 'admin@gmail.com' && password == 'admin') {
      alert("Login successful...");
      this._route.navigate(['products']);
    }else{
      alert("Incorrect email or password...");
    }
  }
  ngOnInit() {
  }

}
