import { HttpClient } from '@angular/common/http';
import { TmplAstTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public host:string = "http://localhost:8080/";
  constructor(public http:HttpClient) { }

  getData(category): Observable<any>{
    /* new Promise((res, rej)=>{
      this.http.get(this.host + api).subscribe((data)=>{
        res(data);
        // console.log(data);
      })
    }) */
    const httpUrl = this.host + `api/index/news?category=${category}`;
    let data = this.http.get(httpUrl);
    console.log(data);

    return data;
    // return this.http.get(this.host + category);

  }

  // 获取行业
  async

}
