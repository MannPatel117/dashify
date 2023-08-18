import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  ngOnInit(){
    window.addEventListener("resize", this.changeLayout)
    this.changeLayout();
  }
  portrait = false;
  changeLayout(){
    const screenWidth = window.innerWidth;
      console.log(screenWidth)
      if(screenWidth<1000)
      {
        this.portrait= true;
      }
      else
      {
        this.portrait= false;
      }
  }
}
