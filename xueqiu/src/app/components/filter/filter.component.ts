
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
  sxList = [];
  exchange= 'sh_sz';
  areacode = '';
  indcode='';
  sxStockList = [];
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

  async checkEvent(item){
    console.log(item);
    let isExist = true;
    this.sxList.forEach((sxObj, index)=>{
      if(sxObj.field == item.field){
        this.sxList.splice(index,1);
        isExist = false;
      }
    })
    if(!isExist){return}
    if (item.adj !=0) {
      item.field = item.field+'.20200930';
    }
    let result = await this.newSer.getRange(item.field);
    console.log(result.data);
    item.min = result.data.min;
    item.cmin = item.min;
    item.max = result.data.max;
    item.cmax = item.max;
    this.sxList.push(item);
  }
  async getSg(){
    let options = {
      category: "CN",
      exchange: this.exchange,
      areacode: this.areacode,
      indcode: this.indcode,
      order_by: "symbol",
      order: "desc",
      page: 1,
      size: 30,
      only_count: 0,
      current:"",
      pct:"",
      // npana.20200930: -23204000000_205982000000
      _: new Date().getTime()
    }
    this.sxList.forEach((item,index)=>{
      if (parseFloat(item.cmax)>parseFloat(item.cmin)) {
        options[item.field]=item.cmin+"_"+item.cmax;
      }else{
        options[item.field]=item.cmax+"_"+item.cmin;
      }

    })
    let sxStock = await this.newSer.getsxStock(options);
    this.sxStockList = sxStock.data.list;

    console.log(this.sxStockList);

  }

}
