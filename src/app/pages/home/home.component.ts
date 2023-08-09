import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private sessionStorage: SessionStorageService, private router: Router)
  {

  }

  logout(){
    this.sessionStorage.destorySession();
    this.router.navigate(['/main']);
  }
}
