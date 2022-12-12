import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { ClickEvent } from '../models/clickEvent';
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy{
//   @Input() userid: number;
// pi;
  constructor() {
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
countValue:number=0;
btnValue: string = "Show";
clickEvent: Array<any> = [];
selectedOption: string;
action: string;
count: number = 0;
isHide: boolean = true;
the_date = new Date();
year = this.the_date.getFullYear();
month = this.the_date.getMonth();
day = this.the_date.getDate(); 
hours = this.the_date.getHours();
minutes = this.the_date.getMinutes();
seconds = this.the_date.getSeconds();
date: string = this.day.toString().concat("-",this.month.toString(),"-",this.year.toString());
time: string = this.hours.toString().concat(":",this.minutes.toString(),":",this.seconds.toString());
event: ClickEvent[]=[];
isShow(){
//   var the_date = new Date();
// var year = this.the_date.getFullYear();
// var month = this.the_date.getMonth();
// var day = this.the_date.getDate(); 
// var hours = this.the_date.getHours();
// var minutes = this.the_date.getMinutes();
// var date: string = this.day.toString().concat("-",this.month.toString(),"-",this.year.toString());
// var time: string = this.hours.toString();

this.countValue = this.countValue +  1;
  if (this.isHide==true) {
    this.isHide = false;
    this.btnValue = "Hide";
    this.action="Show";
  } else {
    this.isHide = true;
    this.btnValue = "Show";
    this.action="Hide";
  }
  this.count = this.count + 1;
  
  this.clickEvent = [this.count, this.selectedOption, this.action, this.date, this.time];
  console.log(this.clickEvent);
  // this.event.push(this.clickEvent);
  
}
getOptionValue(valuee){
  this.selectedOption = valuee.target.value;
}
// ngOnChanges(changes: SimpleChanges): void{
//   for (const propname in changes) {
//     const prop = changes[propname];
//     const{previousValue, currentValue, firstChange} = prop;
//     console.log(`Prop name ${propname}`);
//     console.log(`Privios Value ${previousValue}`);
//     console.log(`Current Value ${currentValue}`);
//     console.log(`First Change ${firstChange}`);
//     console.log(`----------------------`);    
//   }
// }
ngOnChanges(changes: SimpleChanges): void{

  
}
  ngOnInit() {
  }


}
