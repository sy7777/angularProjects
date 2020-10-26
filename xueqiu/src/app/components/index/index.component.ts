import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  circlePosition= {transform: "translate(0px)"};
  quoteList = []
  constructor(public router: Router) {
    // 在这里调用
    this.getData();
  }

  ngOnInit(): void {
  }

  async getData(){
    const httpUrl = "http://localhost:8080/api/index";
    let result = await Axios.get(httpUrl);

    this.quoteList = result.data.data.items
    // console.log(this.quoteList);

  }

  toggleZhishu(index){
    this.circlePosition = {transform: `translate(-${index*576}px)`};
  }

  isNeg(num){
    if (num < 0){
      return true;
    }
    if(num >= 0 ){
      return false;
    }
  }

  tabEvent(index){
    let pathList = ['recommand', 'dayinfo'];
    this.router.navigate([pathList[index]], {
      queryParams:{
        key:pathList[index]
      }
    })
  }
}

