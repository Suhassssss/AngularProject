
import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(private _demoService: DemoService) { }
userData: any;
ngOnInit(): void {
  this._demoService.getUserData().subscribe(data => {
    console.log('getting data from api', data);
    this.userData = data;
    console.table(this.userData);
    
  })
}

}
