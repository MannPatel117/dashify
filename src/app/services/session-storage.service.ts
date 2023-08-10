import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(private router: Router) { }
  createSession(){
    sessionStorage.setItem("Authstatus", "111");
  }

  destorySession(){
    sessionStorage.removeItem("Authstatus");
    this.router.navigate(['/main']);
  }

  findSession(){
    const data = sessionStorage.getItem("Authstatus")
    if(data == "111"){
      return true;
    }
    else{
      return false;
    }
  }
  
}
