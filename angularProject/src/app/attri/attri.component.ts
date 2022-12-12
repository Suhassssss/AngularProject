import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})

export class AttriComponent implements OnInit {
txt: string = "red";
newHookExist: boolean = true;
newHookExists(){
  if (this.newHookExist==true) {
    this.newHookExist= false;
  } else {
    this.newHookExist = true;
  }
}
eventValue: string;

password:string="";
cnfrmPassword:string="";
msg:string= "";
isPassMatched(){
  console.log(this.cnfrmPassword);
  console.log(this.password);
  
  
  if (this.password==this.cnfrmPassword) {
    this.msg='Password matched';
  } else {
    this.msg='Password missmatch';
  }
}
getDataFromChild(value){
  this.eventValue = value;
  console.log("This is new hook component value passed to attri component", value);
  console.log("This is new hook component value passed to attri component", this.eventValue);
  
}
colorVal = 'yellow';
people:any[]=[
  {
    "name":"Jack",
    "country": "UK"
  },
  {
    "name":"Sumit",
    "country": "USA"
  },
  {
    "name":"Anup",
    "country": "HK"
  },
  {
    "name":"CodeMind",
    "country": "UK"
  },
  {
    "name":"Surya",
    "country": "USA"
  }
];
textInput:string = "";
getInputValue(value){
  this.textInput=value;
}
  constructor() { }

  firstName: string;
  lastName: string;
  siblings: Array<string>;
  ngOnInit(){
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }
}
