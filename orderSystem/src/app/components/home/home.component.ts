import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public common:CommonService) { }

  ngOnInit(): void {
    let api = 'api/productlist'
    this.common.get(api).then((res)=>{
      console.log(res);

    })
  }

}
