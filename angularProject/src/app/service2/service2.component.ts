import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
  }
  OnSubscribe(){
    this._demoService.display();
  }
}
