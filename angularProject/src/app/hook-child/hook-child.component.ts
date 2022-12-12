import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClickEvent } from '../models/clickEvent';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit, OnChanges {

  // @Output() colorEvent: EventEmitter<number> = new EventEmitter<number>();
@Input() countValue: number;
@Input() clickEventValue: any[];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
event: ClickEvent[]=[];
  ngOnInit() {
    
  }
// count
// framework
// action
// date
// time
tableChange(){
  if (this.countValue>=5) {
    return "blue";
  } else {
    return "green";
  }
}
// ngOnChanges(changes: SimpleChanges): void{
//   this.event.push(this.clickEventValue);
//   for (const propname in changes) {
//     const prop = changes[propname];
//     const{previousValue, currentValue, firstChange} = prop;
//     console.log(`Prop name ${propname}`);
//     console.log(`Privios Value ${previousValue}`);
//     console.log(`Current Value ${currentValue}`);
//     console.log(`First Change ${firstChange}`);
//     console.log(`----------------------`);  
//      this.tableChange();
//   }
  
// }
}
