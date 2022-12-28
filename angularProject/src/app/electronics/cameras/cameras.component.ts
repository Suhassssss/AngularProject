import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
  canon: number = 30999;
  constructor() { }

  ngOnInit() {
  }

}
