import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { IndexComponent } from './components/index/index.component';
import { NewStockComponent } from './components/new-stock/new-stock.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"newstock", component: NewStockComponent},
  {path:"filter", component: FilterComponent},
  {path:"**", component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
