import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private _demoService: DemoService, private route: ActivatedRoute) { }
  data:any;
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
      this._demoService.getPostBYId(id).subscribe(res => {
        console.log("Get post by id: ", res);
        this.data = res;
      })
  }

}
