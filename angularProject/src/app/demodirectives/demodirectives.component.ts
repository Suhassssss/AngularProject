import { Component, OnInit } from '@angular/core';
import { Course } from '../models/courses';
@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit { 
  title: string = "Top 3 Courses";
  courses: Course[]=[
    { course: 'Angular', fees: '20,000/-', duration: '3.5 Months', salary: '5 LPA'},
    { course: 'React', fees: '20,000/-', duration: '3.5 Months', salary: '4 LPA'},
    { course: 'Java', fees: '20,000/-', duration: '4 Months', salary: '6 LPA'}
  ]
  checkedMain: boolean;
  selectedActor: string;
  getActorValue(value){
    console.log(value.target.value);
    this.selectedActor = value.target.value;
  }
  hrithik: string = 'assets/hrithik.png';
  mahesh: string = 'assets/mahesh_babu.png';
  shahrukh1: string ='assets/shahrukh_khan1.png';
  isShow: boolean = false;
  isChecked(){
    if (this.isShow==false) {
      this.isShow = true;
    } else {
      this.isShow = false; 
    }
  }
  constructor() {
   }

  ngOnInit() {
   
}
}
