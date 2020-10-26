import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FilterComponent } from './components/filter/filter.component';
import { NewStockComponent } from './components/new-stock/new-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilterComponent,
    NewStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
