import { Component } from '@angular/core';
import { NavbuttonService } from 'src/app/componenets/navbutton.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  constructor(private navBtn : NavbuttonService){

  }
  toggle(){
    this.navBtn.toggle();
  }
}
