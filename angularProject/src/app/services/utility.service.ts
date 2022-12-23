import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
// userName = new Subject<any>();
userName = new BehaviorSubject('Angular UI Developer');
// userData = new Subject<any>();
userData = new BehaviorSubject({name: 'Suhas', city: 'Sangola', mobile: '7030889775', course: 'React'});
  constructor() { }
}
