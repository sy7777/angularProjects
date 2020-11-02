import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { TmplAstTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import Axios from 'axios';
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
  async getIndustries(){
    const httpUrl = this.host + `api/filter/industries`;
    const result = await Axios.get(httpUrl);
    return result.data;
  }
  // 获取地区
  async getAreas(){
    const httpUrl = this.host + `api/filter/areas`;
    const result = await Axios.get(httpUrl);
    return result.data;
  }
  // 获取条件股票
  async getFilterStock(options){
    const httpUrl = this.host + `api/filter/stocks`;
    const result = await Axios.get(httpUrl,options);
    return result.data;
  }
  // 获取工具
  async getTools(){
    const httpUrl = this.host + `api/filter/tools`;
    const result = await Axios.get(httpUrl);
    return result.data;
  }
  // 获取字段范围
  async getRange(field){
    const httpUrl = this.host + `api/filter/range?filed=${field}`;
    const result = await Axios.get(httpUrl);
    return result.data;
  }

  // 获取筛选股票
  async getsxStock(options){
    const httpUrl = this.host + `api/filter/sxStock`;
    const result = await Axios.get(httpUrl,{params:options});
    return result.data;
  }

}
