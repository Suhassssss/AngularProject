import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, SelectControlValueAccessor } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-simple-templateform',
  templateUrl: './simple-templateform.component.html',
  styleUrls: ['./simple-templateform.component.css']
})
export class SimpleTemplateformComponent implements OnInit {
//   @ViewChild('myForm', {static: false}) myForm: HTMLFormElement;
//   stud = new Student();
//   submitted: boolean = false;
  
//   defaultValue: string = "Angular";
//   defaultGender: string = "Male";
//   genders = [
//     {id: '1', value: 'Male'},
//     {id: '2', value: 'Female'},
//     {id: '3', value: 'Other'}
//   ];
//   constructor() { }

//   ngOnInit() {
//   }
//   OnSubmit(form:NgForm){
//     this.submitted = true;
//     this.stud.course = form.value.course;
//     this.stud.username = form.value.userDetails.username;
//     this.stud.email = form.value.userDetails.email;
//     this.stud.gender = form.value.gender;
//     console.log(form);
//     console.log(form.value);
//     console.log(form.value.course);
//     console.log(form.value.userDetails.username);
//     console.log(form.value.userDetails.email);
//     this.passStudentData(this.stud);
//     form.reset();
//     form.controls['course'].setValue('Angular');
//     form.controls['gender'].setValue('Male');
    
//   }
//   userEmail:string;
//   emailValidation(form:NgForm){
//     // console.log(form);
//     if (this.userEmail.includes("@codemindtechnology.com")) {
     
//     } else {
//       // form.controls.userDetails['email'].valid=false;
//       this.myForm.controls.userDetails.invalid = true;
//     console.log(form.controls.userDetails.valid);
    
     
//     }
//   }
//   emailValue(emailValue){
//       this.userEmail = emailValue.target.value;
//   }
//   passStudentData(stud: Student){
//     console.log(stud);
//     console.log(stud.course);
//     console.log(stud.username);
//     console.log(stud.email);
//   }



// user: any = { name: "", email: "" };

  constructor() {}

  ngOnInit() {}

  submit(form: any) {
    // console.log(form);
  }
}
