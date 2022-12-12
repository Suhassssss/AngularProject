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
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    })
  }
  OnSubmit(){
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value.username);
    console.log(this.myReactiveForm.value.email);
  }
  // user: any = { name: "", email: "" };

  // constructor() {}

  // ngOnInit() {}

  // submit(form: any) {
  //   console.log(form);
  // }






}
