import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SessionStorageService } from './services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedIn implements CanActivate {
  constructor(private router: Router, private sessionStorage: SessionStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const userIsAuthenticated = this.sessionStorage.findSession()
    if (userIsAuthenticated) {
        return this.router.createUrlTree(['/home']);
    } else {
      // Redirect to login page
      return true;
    }
  }
}
