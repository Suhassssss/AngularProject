import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductsComponent } from './products.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';

const routes: Routes = [
// {path: '', component: ProductsComponent}
  { path: '', component: ProductsComponent, children: [
    { path: 'laptop', component: LaptopComponent },
    { path: 'tablet', component: TabletComponent },
    { path: 'tv', component: TvComponent },
    { path: 'washingmachine', component: WashingmachineComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  constructor(){
    console.log('Products router module loaded');    
  }
 }
