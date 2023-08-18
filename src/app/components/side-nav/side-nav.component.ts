import { Component } from '@angular/core';
import { NavbuttonService } from 'src/app/componenets/navbutton.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(private sessionStorage: SessionStorageService, public nav: NavbuttonService){}
  logout(){
    this.sessionStorage.destorySession();   
  }
}
