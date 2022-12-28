import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CustdirDirective } from '../custdir.directive';
import { UtilityModule } from '../models/utility.module';

const prodToutes: Routes = [
  { path: 'products', component: ProductsComponent, children:[
    { path: 'laptop', component: LaptopComponent },
    { path: 'tv', component: TvComponent },
    { path: 'tablet', component: TabletComponent },
    { path: 'washingmachine', component: WashingmachineComponent }
  ]},
]

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(prodToutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule { }
