import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(component: AdduserComponent) {
    // throw new Error('Method not implemented.');
    if(component.userName.dirty){
      return window.confirm("You have unsaved changes. Are you sure want ot navigate?");
    }
    else{
      return true
    }
  }
  }
  // CanDeactivate(component: AdduserComponent){
  //   if(component.userName.dirty){
  //     return window.confirm("You have unsaved changes. Are you sure want ot navigate?");
  //   }
  //   else{
  //     return true
  //   }
  // }
// }
