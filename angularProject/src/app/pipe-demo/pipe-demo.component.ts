import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
todayDate = new Date();
price: number = 75000;
obj = { id: '101', name: 'Test1'};
obser;
  constructor(private _utilityService: UtilityService) { 
    this.obser = this._utilityService.userName;
  }
myName: string = "Suhas Raosaheb Lawate";
  ngOnInit() {

  }

}
