import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  createSession(){
    sessionStorage.setItem("Authstatus", "111");
  }

  destorySession(){
    sessionStorage.removeItem("Authstatus")
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
