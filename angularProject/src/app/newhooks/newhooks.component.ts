import { style } from '@angular/animations';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newhooks',
  templateUrl: './newhooks.component.html',
  styleUrls: ['./newhooks.component.css']
})
export class NewhooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() myinputMsg:any;
  @Output() myEvent: EventEmitter<any> = new EventEmitter<any>();
  color: string;
  fontFamily: string;
  fStyle: string;
  @ContentChild("attrih2",{static: false}) parentcontent: ElementRef;
  @ContentChild("para",{static: false}) para: ElementRef;
  @ViewChild("newhook", {static: false}) newHook: ElementRef;
  constructor() {
    console.log("Constructor called new hook");
    
   }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("onDestroy called new hook");
    
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    this.newHook.nativeElement.setAttribute('style',`color:${this.color}; font-family:${this.fontFamily}; font-style:${this.fStyle}; font-size:${this.myinputMsg}px`);
    this.myEvent.emit(this.color);
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterContentChecked called new hook");
    this.parentcontent.nativeElement.setAttribute('style',`color:${this.myinputMsg}`);
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterContentInit called new hook");
    console.log(this.parentcontent);
    console.log(this.para);
    
    
    
  }
  count:number = 0;
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.count++;
    console.log("ngDoCheck called new hook", this.count);    
  }
  ngOnChanges(changes: SimpleChanges): void{
  for (const propname in changes) {
    const prop = changes[propname];
    const{firstChange,previousValue, currentValue} = prop;
    console.log(`Prop name ${propname}`);
    console.log(`Privios Value ${previousValue}`);
    console.log(`Current Value ${currentValue}`);
    console.log(`First Change ${firstChange}`);
    console.log(`----------------------`);    
  }
}

  ngOnInit() {
    console.log("ngOnInit called  new hook");
  }
  
}
