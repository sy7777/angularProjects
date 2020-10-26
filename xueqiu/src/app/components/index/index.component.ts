import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  quoteList = []
  constructor() {
    // 在这里调用
    this.getData();
  }

  ngOnInit(): void {
  }

  async getData(){
    const httpUrl = "http://localhost:8080/api/index";
    let result = await Axios.get(httpUrl);

    this.quoteList = result.data.data.items
    console.log(this.quoteList);

  }

  toggleZhishu(index){

  }

}

