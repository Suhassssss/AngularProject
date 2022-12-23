import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
userName;
userDetails;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log(this.userName);
    })
      this._utilityService.userData.subscribe(data => {
        this.userDetails = data;
        console.log("Constructor: ", this.userDetails);
        
      })
   
   }
  updateUserName(uname){
    console.log(uname.value);
    let emp = {
      name: 'Sumit',
      id: '101'
    }
    this._utilityService.userName.next(JSON.stringify(emp));
  }
  updateUserDetails(name,city,mobile,course){
    let user = 
    {
      name: name.value,
      city: city.value, 
      mobile: mobile.value, 
      course: course.value
    }
    this._utilityService.userData.next(user);
    console.log("button",this.userDetails);
  }
  ngOnInit() {
  }

}
