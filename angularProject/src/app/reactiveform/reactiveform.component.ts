import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor(){
    this.createForm();
  }
  enteredName: string;
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
  OnSubmit(){
    console.log(this.myReactiveForm);
    
  }
  // user: any = { name: "", email: "" };

  // constructor() {}

  // ngOnInit() {}

  // submit(form: any) {
  //   console.log(form);
  // }






}
