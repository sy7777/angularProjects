import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FilterComponent } from './components/filter/filter.component';
import { NewStockComponent } from './components/new-stock/new-stock.component';
import { RecommandComponent } from './components/recommand/recommand.component';
import { DayInfoComponent } from './components/day-info/day-info.component';

import { HttpClientModule } from '@angular/common/http';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilterComponent,
    NewStockComponent,
    RecommandComponent,
    DayInfoComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
