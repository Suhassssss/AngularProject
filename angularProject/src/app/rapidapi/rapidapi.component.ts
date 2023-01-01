import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../services/rapid-api.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor( private _rapidAPIService: RapidApiService ) { 
  }
res: any;
news: any;
news1: any;
newsTitle: any;
newsModules: any;
newsImage: string[] = [];
newsImgURL: string;
  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe((res) => {
      console.log( "Rapid Api: ", res);
      this.res = res;
      // console.log( "Rapid Api news: ", this.res.news);
      this.news1 = this.res.news;
      console.log( "Rapid Api news: ", this.news1);
    })
    this._rapidAPIService.getDataBBFinanceNews().subscribe(news => {
      console.log("BBFinance News: ", news);
      this.news = news;
      this.newsTitle = this.news.title;
      this.newsModules = this.news.modules;
      console.log("BBFinance News modules: ", this.news.modules[0].stories[0].image);
      this.newsImgURL = this.news.modules[2].stories[0].image;
      console.log("Image: ", this.newsImgURL);
      
    this.thumnailImages();
    })
  }
  thumnailImages(){
    for (let n of this.news1) {
      if (n.thumbnailImage !== undefined) {
        this.newsImage.push(n.thumbnailImage);        
      }
      // console.log(this.newsImage);
    }
    for (let img of this.newsImage) {
      console.log("NewImage: ", img);
      
    }
  // console.log("NewsImages: ", this.news1);

  }
}
