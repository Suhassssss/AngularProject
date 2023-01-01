import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _demoService: DemoService){

  }
  ngOnInit(): void {
    // this._demoService.getUserData().subscribe(data => {
    //   console.log('getting data from api', data);
      
    // })
  }
  public uid: number;
  title = 'Angular App';
  data: string;
  name: string;
  product: Product = new Product();
  price: number;
  handleData(value){
    this.data = value.target.value;
  }
  deletePost(){
    this._demoService.deletePostById(1).subscribe(res=>{
      console.log("deletePost: "+ res);
      
    })
  }
}
