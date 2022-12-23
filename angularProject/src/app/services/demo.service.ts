import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com/users';
products = [
  {name: 'laptop', id: '101'},
  {name: 'Mobile', id: '102'},
  {name: 'laTVptop', id: '103'}
]
  constructor(private http: HttpClient) { }
  display(){
    alert('Subscribed successfully');
  }
  getUserData(){
   return this.http.get(this.apiURL);
  }
}
