import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbuttonService {
  private hamburgerSubject = new BehaviorSubject<boolean>(false);
  hamburger$ = this.hamburgerSubject.asObservable();
  constructor() { }

  toggle(){
    this.hamburgerSubject.next(!this.hamburgerSubject.value);
  }
}
