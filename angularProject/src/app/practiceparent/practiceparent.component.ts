import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practiceparent',
  templateUrl: './practiceparent.component.html',
  styleUrls: ['./practiceparent.component.css']
})
export class PracticeparentComponent implements OnInit {
name: string = "Suhas";
education1: any[];
getChildData(argument){
this.education1 = argument;
// this.education.push(value);
console.log(this.education1);

}
remove(value){
  this.education1.splice(value.target.value,1);
}
  constructor() { }

  ngOnInit() {
  }

}
