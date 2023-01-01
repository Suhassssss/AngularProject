import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidApiService {
url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
newsURL = 'https://bb-finance.p.rapidapi.com/news/list?query=news';
  constructor( private http: HttpClient ) { }
  getDataBBFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '83cf059edemsh30705f40a8ac618p1a2e53jsn87df40aa3efb'
    })
    return this.http.get(this.url, { headers: headers });
  }
  getDataBBFinanceNews(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '83cf059edemsh30705f40a8ac618p1a2e53jsn87df40aa3efb'
    })
    return this.http.get(this.newsURL, { headers: headers });
  }
}
