import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Education } from '../models/education';

@Component({
  selector: 'app-practicechild',
  templateUrl: './practicechild.component.html',
  styleUrls: ['./practicechild.component.css']
})
export class PracticechildComponent implements OnInit {
@Input() parentComp: string;
@Output() eduEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
edu: Education[]=[
  {qualification: 'SSC', clg_university: 'RCSM, Kolhapur', percentage: '75 %', passingYear: '2015'},
  {qualification: 'HSC', clg_university: 'RCSM Kolhapur', percentage: '52.46 %', passingYear: '2017'},
  {qualification: 'BCA', clg_university: 'Vivekanand College, KOlhapur', percentage: '67.72 %', passingYear: '2020'},
  {qualification: 'MCA', clg_university: 'Shivaji University, KOlhapur', percentage: '85 %', passingYear: '2022'}
];
addData(){
  this.eduEvent.emit(this.edu);
}


}
