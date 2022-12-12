import { Component, OnInit, SimpleChanges } from '@angular/core';
import {Input } from '@angular/core';
import { Education } from '../models/education';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  @Input() myinputMsg:string;
  
  isShow: boolean= false;
  title: string = "Qualification";
  edu: Education[]=[
    {qualification: 'SSC', clg_university: 'RCSM, Kolhapur', percentage: '75 %', passingYear: '2015'},
    {qualification: 'HSC', clg_university: 'RCSM Kolhapur', percentage: '52.46 %', passingYear: '2017'},
    {qualification: 'BCA', clg_university: 'Vivekanand College, KOlhapur', percentage: '67.72 %', passingYear: '2020'},
    {qualification: 'MCA', clg_university: 'Shivaji University, KOlhapur', percentage: '85 %', passingYear: '2022'}
  ];
  isChecked(){
    if(this.isShow==true){
      this.isShow = false;
    }else{
      this.isShow = true;
    }
  }
  selectedOption: string;
  getOptionValue(valuee){
    this.selectedOption = valuee.target.value;
  }
  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error('Method not implemented.');
  //   console.log("ngOnchanges called");
    
  // }

  ngOnInit() {
    console.log("value from parent: ",this.myinputMsg);
    
  }

}
