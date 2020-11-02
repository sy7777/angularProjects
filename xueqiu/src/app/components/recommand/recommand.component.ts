import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-recommand',
  templateUrl: './recommand.component.html',
  styleUrls: ['./recommand.component.scss']
})
export class RecommandComponent implements OnInit {

  newsList = [];
  constructor(public news:NewsService, public route: ActivatedRoute) { }

/*   ngOnInit(): void {
    // const api = 'api/index/news';
    const api = 'hot/listV2';
      this.news.getData(api).subscribe((res)=>{

        this.newsList = res.items;
        console.log(this.newsList);
    })

  }
} */

  ngOnInit(): void {
    // const api = 'api/index/news';
    const api = 'hot/listV2';




        // this.news.getData(api).subscribe((res)=>{
    //  this.newsList = res.items;
    //   console.log(res.items);
    // this.newsList = res.items;
/*     this.route.queryParams.subscribe((params)=>{
      console.log(params);

      switch (params.key){
        case 'recommand':
          this.news.getData(api).subscribe((res)=>{
            console.log(res);
            this.newsList = res.items;
          })
      }

      }) */
      this.route.queryParams.subscribe((params)=>{
        // console.log(params);

      })
      this.news.getData(api).subscribe((res)=>{

        this.newsList = res.items;
        console.log(this.newsList);
    })

  }
}
