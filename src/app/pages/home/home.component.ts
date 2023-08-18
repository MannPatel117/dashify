import { Component, OnInit } from '@angular/core';
import { NavbuttonService } from 'src/app/componenets/navbutton.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  active: boolean;
  
  constructor(private sessionStorage: SessionStorageService, private navBtn: NavbuttonService)
  {

  }
  ngOnInit() {
    this.navBtn.hamburger$.subscribe(value => {
      this.active = value;
    });
  }

  logout(){
    this.sessionStorage.destorySession();   
  }

}
