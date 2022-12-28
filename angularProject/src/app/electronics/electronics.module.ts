import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CamerasComponent } from './cameras/cameras.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../models/utility.module';

const electronic: Routes=[
  { path: 'electronics', component: ElectronicsComponent, children:[
    { path: 'mobile', component: MobilesComponent },
    { path: 'camera', component: CamerasComponent }
  ] },
] 

@NgModule({
  declarations: [
    ElectronicsComponent,
    MobilesComponent,
    CamerasComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(electronic)
  ],
  exports: [
    RouterModule
  ]
})
export class ElectronicsModule { }
