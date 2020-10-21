import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public domain:string='http://a.itying.com/'
  constructor(public http:HttpClient) { }
  get(api){
    return new Promise((res, rej)=>{
      this.http.get(this.domain+api).subscribe((data)=>{
        res(data);
      })
    })
  }
}
