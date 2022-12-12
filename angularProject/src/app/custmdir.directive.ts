import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustmdir]'
})
export class CustmdirDirective {

  password:string="";
  cnfrmPassword:string="";
  msg:string= "";

  constructor() { 
  console.log(this.cnfrmPassword);
  console.log(this.password);
  
  
  if (this.password==this.cnfrmPassword) {
    this.msg='Password matched';
  } else {
    this.msg='Password missmatch';
  }
  }

}
