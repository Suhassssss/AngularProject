import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from '../models/subscriptions';

@Component({
  selector: 'app-simpletemplate',
  templateUrl: './simpletemplate.component.html',
  styleUrls: ['./simpletemplate.component.css']
})
export class SimpletemplateComponent implements OnInit {
  defaultValue: string = "Advanced";
  constructor() { }
  usrname:string;
  email: string;
  submitted: boolean= false;
  subscription: string;
  password: string;
  formData: Subscription[] = [];
  onSubmit(form: NgForm){
    this.submitted=true;
    this.usrname=form.value.name;
    this.email=form.value.email;
    this.subscription=form.value.subscriptionType;
    this.password=form.value.password;
    // let subscriptions: Subscription[]=[
    //   {name: this.usrname, email: this.email, subscription:this.subscription,password:this.password }
    // ];
    this.formData.push({name: this.usrname, email: this.email, subscription:this.subscription,password:this.password });
    console.log(this.usrname);
    console.log(this.email);
    console.log(this.subscription);
    console.log(this.password);
    console.log(this.formData);
    
    console.log(form.value);
    form.reset();
    form.controls['subscriptionType'].setValue('Advanced');
  }
  ngOnInit() {
  }

}
