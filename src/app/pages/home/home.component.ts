import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private sessionStorage: SessionStorageService)
  {

  }

  logout(){
    this.sessionStorage.destorySession();   
  }
}
