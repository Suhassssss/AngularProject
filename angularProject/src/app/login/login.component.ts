import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }
  checkUser(uname, password){
    // if (uname == 'admin@gmail.com' && password == 'admin') {
    //   alert("Login successful...");
    //   this._route.navigate(['home']);
    // }else{
    //   alert("Incorrect email or password...");
    // }
    var output = this._authService.checkUserNameAndPassword(uname,password);
    if (output == true) {
      window.alert('Login successful...');
      this._route.navigate(['home']);
    }
    else{
      window.alert('Invalid username or password!');
    }
  }
  ngOnInit() {
  }

}
