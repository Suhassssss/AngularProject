import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Stud } from '../models/student';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.css']
})
export class CrudAppComponent implements OnInit {
  // variables
  addData: boolean = false; // to show and hide data inputs
  btnAdd: string = "Add Data"; // btn value
  dltById: any; // to store id to delete data
  name: string;
  email: string;
  course: string;
  fee: number;
  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder, private _firebase: FirebaseService) {
    this.myReactiveForm = new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'course' : new FormControl(''),
      'fee' : new FormControl('')
    })
   }
   showData: any;
  ngOnInit() {
    this.getData();
  }
  stud: Stud;
  stude: Stud;
  // functions 
  shoData(){
    
    
  }
  showInputs(){  // to show and hide functionality of data inputs
    if (this.addData == true) {
        this.addData = false;
        this.btnAdd = "Add Data";
    } else {
      this.addData = true;
      this.btnAdd = "Close";
    }
  }
  createData(){
    console.log(this.myReactiveForm);
    this.stud = new Stud();
    this.stud.name = this.myReactiveForm['controls'].name.value;
    this.stud.email = this.myReactiveForm['controls'].email.value;
    this.stud.course = this.myReactiveForm['controls'].course.value;
    this.stud.fee = this.myReactiveForm['controls'].fee.value;
    console.log(this.stud);
    this._firebase.createPost(this.stud).subscribe();
    this.getData();
  }
  getData(){
      this._firebase.getPost().pipe(
        map(res=>{
          const postArray = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              postArray.push({...res[key], id: key});
            }
          }
          return postArray;
        })
      ).subscribe(
        res => {
          console.log("Map: ",res);
          this.showData = res;
        }
      );
  }
  editData(editId){
    this.stude = new Stud();
    this.stude.name = this.myReactiveForm['controls'].name.value;
    this.stude.email = this.myReactiveForm['controls'].email.value;
    this.stude.course = this.myReactiveForm['controls'].course.value;
    this.stude.fee = this.myReactiveForm['controls'].fee.value;
    console.log("Stude: ",this.stude);
    this._firebase.editPost(editId, this.stude).subscribe();
    this.getData();
    // console.log("Edit: ", name.value, email.value, course.value, fee.value);
    
  }
  deleteData(deleteId){
    // console.log("delete called",deleteId);
    this._firebase.deletePost(deleteId).subscribe(
      res=>{
        console.log("Deleted: ",res);
        
      }
    );
    this.getData();
  }
}
