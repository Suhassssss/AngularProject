import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-remove-row',
  templateUrl: './remove-row.component.html',
  styleUrls: ['./remove-row.component.css']
})
export class RemoveRowComponent implements OnInit, OnChanges {
place: string; 
places: string[]=[];
addPlace(){
  this.places.push(this.place);
  this.place = "";
}
removePlace(value){
  this.places.splice(value.target.value,1);
}
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
