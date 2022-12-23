import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder){
    this.createForm();
  }
  enteredName: string;
  ngOnInit(){
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
