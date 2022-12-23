import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ass',
  templateUrl: './pipe-ass.component.html',
  styleUrls: ['./pipe-ass.component.css']
})
export class PipeAssComponent implements OnInit {
todayDate = new Date();
name: string = "Codemind Technology";
msg: string = "Your Success Partner";
sal: number = 75000;
  constructor() { }

  ngOnInit() {
  }

}
