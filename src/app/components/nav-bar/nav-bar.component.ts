import { Component } from '@angular/core';
import { NavServiceService } from 'src/app/loggedOut-pages/nav-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public isCollapsed = true;
  constructor(public navService: NavServiceService)
  {}
  main(){
    this.navService.mainRoute();
  }
  login(){
    this.navService.loginRoute();
  }
  register(){
    this.navService.registerRoute();
  }
}

