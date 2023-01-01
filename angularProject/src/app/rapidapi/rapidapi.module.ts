import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RapidapiComponent } from './rapidapi.component';

const routes: Routes = [
  { path: '', component: RapidapiComponent },
];

@NgModule({
  declarations: [
    RapidapiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RapidapiModule {
   constructor(){
    console.log("Rapid Module Loaded...");
   }
 }
