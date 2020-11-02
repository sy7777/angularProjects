import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  industriesList = [];
  areasList = [];
  tabsList = [];
  areas = {};
  tools = {};
  toolsObj = {'基本指标':[]};
  currentTab = '';
  constructor(public newSer: NewsService) { }

  async ngOnInit(): Promise<void> {

    let resultPro =  this.newSer.getIndustries();
    let resultAreaPro = this.newSer.getAreas();
    let resultToolPro = this.newSer.getTools();
    let resultStockPro = this.newSer.getFilterStock({
      params:{
        order_by: 'follow',
        page: 1,
        order: 'desc'
      }
    });
    const taskList = [resultPro, resultAreaPro, resultToolPro, resultStockPro];
    const resList = await Promise.all(taskList);
    const [result, resultArea, resultTool, resultStock] = resList;
    this.industriesList = result.data.industries;
    // console.log(result.data.industries);

    this.areas = resultArea.data.areas;
    this.areasList = Object.keys(this.areas);
    // console.log(this.areasList);

    this.toolsObj = resultTool;
    this.tabsList = Object.keys(resultTool);
    this.currentTab = this.tabsList[0];
    // this.tools = resultTool.data;
    console.log(this.toolsObj);
  }

  // 获取行业


  toggleTabs(key){
    // console.log(item);
    this.currentTab = key;
  }

}
