import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
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
