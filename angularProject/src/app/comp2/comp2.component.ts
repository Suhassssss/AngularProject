import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  userDetails;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    })
    this._utilityService.userData.subscribe(data => {
      this.userDetails = data;
    })
   }
  updateUserName(uname){
    console.log(uname.value);
    this._utilityService.userName.next(uname.value);
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
