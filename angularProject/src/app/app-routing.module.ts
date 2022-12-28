import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { LaptopComponent } from './products/laptop/laptop.component';
// import { ProductsComponent } from './products/products.component';
// import { TabletComponent } from './products/tablet/tablet.component';
// import { TvComponent } from './products/tv/tv.component';
// import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent }, // localhost://4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  // { path: 'products', component: ProductsComponent, children:[
  //   { path: 'laptop', component: LaptopComponent },
  //   { path: 'tv', component: TvComponent },
  //   { path: 'tablet', component: TabletComponent },
  //   { path: 'washingmachine', component: WashingmachineComponent }
  // ]},
  { path: 'postdetails/:id', component: PostdetailsComponent },
  { path: 'posts', component: DemopostComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
