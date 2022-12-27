import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student' ;

@Component({
  selector: 'app-rf-ass',
  templateUrl: './rf-ass.component.html',
  styleUrls: ['./rf-ass.component.css']
})
export class RfAssComponent implements OnInit {

 
  myReactiveForm: FormGroup;
  constructor(){
    this.createForm();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('',[Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    })
  }
  notAllowedNames: any[] = ['Suhas'];
  genders = [
        {id: '1', value: 'Male'},
        {id: '2', value: 'Female'},
        {id: '3', value: 'Other'}
      ];
  formData: Student[]=[];
  NaNames(controls:FormControl){
    // for (const iterator of this.myReactiveForm.value) {
    //   if(iterator === this.myReactiveForm.value.username){

    //   }
    // }
    if(this.notAllowedNames.indexOf(controls.value) !== -1){

      return {'namesNotAllowed':true};
    }
    return null;
   
  }
  OnSubmit(){

    this.notAllowedNames.push(this.myReactiveForm.value.username);
    this.formData.push({username: this.myReactiveForm.value.username, email: this.myReactiveForm.value.email, course: this.myReactiveForm.value.course, gender: this.myReactiveForm.value.gender});
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset();
    this.myReactiveForm.controls['course'].setValue('Angular');
    this.myReactiveForm.controls['gender'].setValue('Male');
    
  }
  // user: any = { name: "", email: "" };

  // constructor() {}

  // ngOnInit() {}

  // submit(form: any) {
  //   console.log(form);
  // }






}
