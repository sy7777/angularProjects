import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayInfoComponent } from './components/day-info/day-info.component';
import { FilterComponent } from './components/filter/filter.component';
import { IndexComponent } from './components/index/index.component';
import { NewStockComponent } from './components/new-stock/new-stock.component';
import { RecommandComponent } from './components/recommand/recommand.component';

const routes: Routes = [
  {path:"", component: IndexComponent,
  children:[
    {path:"", redirectTo:"recommand", pathMatch: "full"},
    {path:"recommand", component: RecommandComponent},
    {path:"dayinfo", component: DayInfoComponent}

  ]
},
  {path:"newstock", component: NewStockComponent},
  {path:"filter", component: FilterComponent},
  {path:"**", component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
