import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
// import { LaptopComponent } from './products/laptop/laptop.component';
// import { ProductsComponent } from './products/products.component';
// import { TabletComponent } from './products/tablet/tablet.component';
// import { TvComponent } from './products/tv/tv.component';
// import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'aboutus', canActivate:[AuthGuard], component: AboutusComponent }, // localhost://4200/aboutus
  { path: 'contactus', canActivate:[AuthGuard], component: ContactusComponent },
  // { path: 'products', component: ProductsComponent, children:[
  //   { path: 'laptop', component: LaptopComponent },
  //   { path: 'tv', component: TvComponent },
  //   { path: 'tablet', component: TabletComponent },
  //   { path: 'washingmachine', component: WashingmachineComponent }
  // ]},
  // { path: 'electronics', canActivate:[AuthGuard], loadChildren: './electronics/electronics.module#ElectronicsModule' },
  // { path: 'products', component: ProductsComponent },
  { path: 'rapidapi', loadChildren: './rapidapi/rapidapi.module#RapidapiModule' },
  { path: 'electronics', loadChildren: './electronics/electronics.module#ElectronicsModule' },
  // { path: 'products', component: ProductsComponent },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  // { path: 'orders', canActivate:[AuthGuard], loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'postdetails/:id', canActivate:[AuthGuard], component: PostdetailsComponent },
  { path: 'posts',  canActivate:[AuthGuard], component: DemopostComponent },
  { path: 'adduser', canDeactivate:[UnsavedchangesGuard] , component: AdduserComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
