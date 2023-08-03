import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  login=false;
  main=false;
  register=false;
  constructor(private router : Router) { }

  mainRoute(){
    this.main=true;
    this.login=false;
    this.register=false;
    this.router.navigate(['/main']);
  }

  loginRoute(){
    this.main=false;
    this.login=true;
    this.register=false;
    this.router.navigate(['/login']);
  }
  registerRoute(){
    this.main=false;
    this.login=false;
    this.register=true;
    this.router.navigate(['/register']);
  }
}
