import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com';
  user = '/users';
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
   return this.http.get(this.apiURL+this.user);
  }
  getPosts(): Observable<any>{
    return this.http.get(`${devAPIUrl}posts`);
  }
  getPostBYId(id){
    return this.http.get(`${devAPIUrl}posts/` + id);
  }
  deletePostById(id){
    return this.http.delete(`${devAPIUrl}posts/` + id)
  }
}
