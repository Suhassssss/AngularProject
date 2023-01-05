import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { Stud } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url = 'https://angular-crud-operation-a22d7-default-rtdb.firebaseio.com/';
  constructor(private _httpClient: HttpClient) { }
  // createPost(){
  //   let postData = {
  //     title: 'This is angular 8 crud',
  //     content: 'This is firebase crud operation with post'
  //   }
  //   return this._httpClient.post(this.url+ 'posts.json', postData);
  // }
  users: any[] = [
    {id: '101', name: 'Suhas', gender: 'Male'},
    {id: '102', name: 'Akash', gender: 'Male'},
    {id: '103', name: 'Sakshi', gender: 'Female'}
  ];
  createPostDataReactiveForm(firebasePost: FireBasePost){
    return this._httpClient.post(this.url+ 'posts.json', firebasePost);
  }
  getPostDataReactiveForm(){
    return this._httpClient.get(this.url+ 'posts.json');
  }
  createPost(stud: Stud){
    return this._httpClient.post(this.url+ 'posts.json', stud);
  }
  getPost(){
    return this._httpClient.get(this.url+ 'posts.json');
  }
  editPost(id: any, data): Observable<any>{
    return this._httpClient.put( this.url+ 'posts/'+id+'.json',  data);
  }
  deletePost(id: any): Observable<any>{
    return this._httpClient.delete(this.url+ 'posts/'+id+'.json');
  }

}
