import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
tabPrice:number = 66999;
tvPrice:number = 86480;
  constructor() { }

  ngOnInit() {
  }

}
