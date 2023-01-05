import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import { filter, map, take, takeLast, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  firebasepost: FireBasePost;
  constructor(private _fb: FormBuilder, private _firebaseservice: FirebaseService){
    this.createForm();
  }
  enteredName: string;
  postArray: any;
  postArray2: any[] = [];
  ngOnInit(){
    this._firebaseservice.getPostDataReactiveForm().subscribe(data => {
      console.log("Get Post: ", data);      
    })
    // const data1 = from(this._firebaseservice.users);
    //   data1.subscribe(res => {
    //     console.log("Example of from operator: ", res.name);
    //   })
    //   data1.pipe(
    //     map(x => {return x.name})
    //   ).subscribe(res => {
    //     console.log("Res: ", res);
        
    //   })
      // this._firebaseservice.getPostDataReactiveForm().pipe(
      //   map(responseData => {
      //     // empty array
      //     const postArray = [];
      //     // for in loop
      //     for(const key in responseData){
      //     // check key
      //       if(responseData.hasOwnProperty(key)){
      //     // push new value in to array
      //         postArray.push({...responseData[key], id: key});

      //       }
      //     }
      //     return postArray;
      //   })
      // )
      // .subscribe(res => {
      //   console.log("After manipulate data", res);
        
      // })
      // const data = from(this._firebaseservice.users);
      // data.pipe(
      //   filter( u => u.gender == "Male"),
      //   toArray()
      // ).subscribe(res => {
      //   console.log("Filter operator", res);
        
      // })
      //take operator
      // const sourse = interval(1000);
      // sourse.pipe(
      //   take(5)
      // )
      // .subscribe(res => {
      //   console.log('Interval example', res);
        
      // })
      // take last
      let randomNames = ['Suhas','Codemind','Html', 'Javascript', 'typescript', 'Angular'];
      const sourse = from(randomNames);
      sourse.pipe(
        takeLast(2)
      ).subscribe(res=>{
        console.log('take last operator', res);
        
      })
    // throw new Error('Method not implemented.');
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails': {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    // }, 1500);
  
  // setTimeout(() => {
  //   this.myReactiveForm.patchValue({
  //     'userDetails': {
  //       'username': 'Codemind1122',
  //       'email': 'test@gmail.com'
  //     }
  //   })
  // }, 1500);
}
submitted: boolean = false;
  createForm(){
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //   'username': new FormControl('',[Validators.required, this.NaNames.bind(this)]),
    //   'email': new FormControl('',[Validators.required, Validators.email], this.NaEmails)
    // }),
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // })

    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([new FormControl(null)])
    })
  }
  removeSkill(value){
    // (<FormArray>this.myReactiveForm.get('skills')).pop();
  }
  OnAddSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null));
  }
  notAllowedNames = ['Codemind', 'Technology'];
  genders = [
        {id: '1', value: 'Male'},
        {id: '2', value: 'Female'},
        {id: '3', value: 'Other'}
      ];
  
  NaNames(controls:FormControl){
    this.enteredName= controls.value;
    if(this.notAllowedNames.indexOf(controls.value) !== -1){

      return {'namesNotAllowed':true};
    }
    return null;
   
  }
  NaEmails(controls:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(controls.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true});
        }else{
          resolve(null)
        }

      }, 100);
    })
    return myResponse;
  }
  OnSubmit(){
    console.log(this.myReactiveForm);
    this.submitted = true;
    this.firebasepost = new FireBasePost();
    this.firebasepost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.firebasepost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.firebasepost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasepost.course = this.myReactiveForm['controls'].course.value;
    this.firebasepost.skills = this.myReactiveForm['controls'].skills.value;

    console.log("FirebasePost: ", this.firebasepost);
    this._firebaseservice.createPostDataReactiveForm(this.firebasepost).subscribe( res => {
      console.log("Post from reactive form", res);
      
    } )
    
  }
  back(){
    this.submitted = false;
  }
  // user: any = { name: "", email: "" };

  // constructor() {}

  // ngOnInit() {}

  // submit(form: any) {
  //   console.log(form);
  // }






}
