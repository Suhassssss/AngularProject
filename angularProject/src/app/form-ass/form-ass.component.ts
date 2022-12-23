import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ass',
  templateUrl: './form-ass.component.html',
  styleUrls: ['./form-ass.component.css']
})
export class FormAssComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
   }
  genders = [
        {id: '1', value: 'Male'},
        {id: '2', value: 'Female'},
        {id: '3', value: 'Other'}
      ];
      gender = [
        {id: '1', value: 'Male'},
        {id: '2', value: 'Female'},
        {id: '3', value: 'Other'}
      ];
  stDefaultGender: string = "Male";
  stDefaultCity: string = "Mumbai";
  submitTF(templateForm:NgForm){
    console.log("Simple Template Driven Form");
    console.log(templateForm);
    
  }
  OnSubmitRF(){
    console.log("Reactive Form");
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.controls['password'].value);
    
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'firstName': new FormControl('',[Validators.required, this.fNameRange]),
      'lastName': new FormControl('',[Validators.required, this.lNameRange]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'age': new FormControl('',[Validators.required, this.AgeRange]),
      'city': new FormControl('Mumbai'),
      'gender': new FormControl('Male'),
      'mobile': new FormControl('',[Validators.required, this.MobileRange]),
      'password': new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',[Validators.required, this.matchPass.bind(this)])

    })
  }
  fNameRange(controls:FormControl){
    if(((controls.value.length < 5) || (controls.value.length > 5)) && controls.value !== "" ){
      return {'fnameRange':true};
    }
    return null;
   
  }
  lNameRange(controls:FormControl){
    if(controls.value.length > 10){
      return {'lnameRange':true};
    }
    return null;
   
  }
  MobileRange(controls:FormControl){
    if(controls.value.length > 10){
      return {'mobileRange':true};
    }
    return null;
   
  }
  AgeRange(controls:FormControl){
    if(((controls.value > 20) || (controls.value < 17)) && controls.value !== ""){
      return {'ageRange':true};
    }
    return null;
  }
  pass: string;
  stPass: string;
  getPassST(value){
    this.stPass = value.target.value;
  }
  getPassword(){
    this.pass = this.myReactiveForm.controls['password'].value;
  }
  matchPass(controls:FormControl){
    if ((this.pass !== controls.value) && controls.value !== "") {
      return {'passMatch':true};
    } 
    return null;
  }
  ngOnInit() {
  }

}
