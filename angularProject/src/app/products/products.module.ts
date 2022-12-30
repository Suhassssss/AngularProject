import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { ProductsComponent } from './products.component';
import { UtilityModule } from '../models/utility.module';
import { ProductsRoutingModule } from './products-routing.module';

// const prodToutes: Routes = [
//   { path: 'products', component: ProductsComponent, children:[
//     { path: 'laptop', component: LaptopComponent },
//     { path: 'tv', component: TvComponent },
//     { path: 'tablet', component: TabletComponent },
//     { path: 'washingmachine', component: WashingmachineComponent }
//   ]},
// ]

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
    ProductsRoutingModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log("Product module called");
  }
    
 }
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductsComponent } from '../products/products.component';
// import { LaptopComponent } from '../products/laptop/laptop.component';
// import { TabletComponent } from '../products/tablet/tablet.component';
// import { TvComponent } from '../products/tv/tv.component';
// import { WashingmachineComponent } from '../products/washingmachine/washingmachine.component';

// @NgModule({
//   declarations: [
//     ProductsComponent,
//     LaptopComponent,
//     TabletComponent,
//     TvComponent,
//     WashingmachineComponent
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class ProductsModule { 
//   constructor(){
//     console.log("Product module loaded");
    
//   }
// }
