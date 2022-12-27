import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {
  tabPrice:number=66999;
  constructor() { }

  ngOnInit() {
  }

}
