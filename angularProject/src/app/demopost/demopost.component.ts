import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { DemoService } from '../services/demo.service';
declare var  window: any;
@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  arrPosts: Post[] = [];
  id: number;
  constructor(private _demoService: DemoService) { }
  formModal: any;
  ngOnInit() {
    this._demoService.getPosts().subscribe(res => {
      this.arrPosts = res;
      console.log('jesonplaceholder arrPost', this.arrPosts);
      this.formModal = new window.bootstrap.Modal(
        document.getElementById("myModal")
      )
    })
  }
  openModal(btnValue){
    this.id = btnValue - 1;
    // console.log("target value: ", btnValue - 1 );
    
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }

}
