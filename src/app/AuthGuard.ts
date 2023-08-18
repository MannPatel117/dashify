import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SessionStorageService } from './services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private sessionStorage: SessionStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const userIsAuthenticated = this.sessionStorage.findSession()
    if (userIsAuthenticated) {
      return true;
    } else {
      // Redirect to login page
      return this.router.createUrlTree(['/login']);
    }
  }
}
