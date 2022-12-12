import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/studentData';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
fName: string="";
mName: string="";
lName: string="";
submitted: boolean=false;
stud = new Student();
date = new Date();
day = this.date.getDate();
month = this.date.getMonth() + 1;
year = this.date.getFullYear();
startDate = `${this.year.toString()}-${this.month.toString()}-${this.day.toString()}`;
  constructor() { 
  }
  getfName(value){
    this.fName=value.target.value;
  }
  getmName(value){
    this.mName=value.target.value;
  }
  getlName(value){
    this.lName=value.target.value;
  }
  OnSubmit(form:NgForm){
    console.log(form);
    console.log(form.value);
    this.submitted = true;
    this.stud.name = `${this.fName} ${this.mName} ${this.lName}`;
    this.stud.email = form.value.email;
    this.stud.date = form.value.dob;
    this.stud.gender = form.value.gender;
    this.stud.address = form.value.address;
    this.stud.course = form.value.course;
    this.stud.mobile = form.value.mobile;
    console.log(form);
    console.log(form.value);
    console.log(form.value.course);
    console.log(this.stud.name);
    console.log(form.value.email);
    this.passStudentData(this.stud);
  }
  passStudentData(stud: Student){
    console.log(stud);
    // console.log(stud.course);
    // console.log(stud.name);
    // console.log(stud.email);
  }
  backToRegister(){
    this.submitted = false;
  }
  ngOnInit() {
  }
  
}
