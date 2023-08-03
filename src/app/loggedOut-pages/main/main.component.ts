import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(private navService: NavServiceService)
  {

  }

  ngOnInit(): void {
    this.navService.mainRoute();
  }

  login(){
    this.navService.loginRoute();
  }
}
