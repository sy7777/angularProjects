import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductContentComponent } from './components/product-content/product-content.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"product-content", component:ProductContentComponent},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
