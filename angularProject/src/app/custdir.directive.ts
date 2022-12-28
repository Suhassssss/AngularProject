import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective implements OnInit {
@Input() color: string;
  constructor(private el: ElementRef, private render: Renderer2) {
    // console.log('custom directive applied', this.value);
    //el.nativeElement.style.backgroundColor = 'gray';
    //el.nativeElement.style.display = 'none';
    // render.setStyle(el.nativeElement, 'color', this.color);
   }
ngOnInit(){
  console.log('custom directive applied', this.color);
  this.render.setStyle(this.el.nativeElement, 'color', this.color);
}
}
