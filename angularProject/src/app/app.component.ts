import { Component } from '@angular/core';
import { Product } from './models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uid: number;
  title = 'Angular App';
  data: string;
  name: string;
  product: Product = new Product();
  price: number;
  handleData(value){
    this.data = value.target.value;
  }
}
