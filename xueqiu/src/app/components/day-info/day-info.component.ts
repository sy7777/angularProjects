import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnInit {
  dayInfoList: any;
  currentTime = new Date();
  constructor(public news:NewsService) { }

  ngOnInit(): void {
    const api = 'livenews/list';
      this.news.getData(api).subscribe((res)=>{
        this.dayInfoList = res.items;
        console.log(this.dayInfoList);
    })
  }
}
