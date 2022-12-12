import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Customers } from '../models/customers';
@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  
  @Input() emp1: [];
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  @Output() customerEvent: EventEmitter<any> = new EventEmitter<any>();
  txt:string;
  // function will call once user enter text box value
  addToFood(value){
    // foodevent is nothing but your custom event
    this.foodevent.emit(value);
    this.txt = "";
  }
 
// custDetail: Array<any> =[this.custName, this.custMobile, this.custVehicle, this.custVehiType, this.custVehiNum];
// custDetail: Customers[]=[];
custName: string = "";
custMobile: string = "";
custVehicle: string = "";
custVehiNum: string = "";
reset(){
  this.custName = "";
this.custMobile = "";
this.custVehicle = "";
this.custVehiNum = "";
}
custDetails: Array<any>=[];
  addCustomer(valueA, valueB, valueC, valueD, valueE){
   let custDetail: Customers[]=[{custName: valueA, custMobile: valueB, custVehicle: valueC, 
      custVehiType: valueD, custVehiNum: valueE }];
      this.custDetails.push(custDetail);
    console.table(this.custDetails);
    
   this.customerEvent.emit(this.custDetails);
   for (const iterator of this.custDetails) {
    
      console.table("Parent for loop",iterator[0]);
   }
  }

  constructor() { }
  ngOnInit() {
    // console.log("Array of objects of class Employee are passed from parent to child component:");
    // console.table(this.emp1);
    
    
  }
}
 
