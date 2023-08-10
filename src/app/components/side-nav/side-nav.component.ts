import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(private sessionStorage: SessionStorageService){}
  logout(){
    this.sessionStorage.destorySession();   
  }
}
