import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModRoutingModule } from './home-mod-routing.module';
import { HomeComponent } from '../home/home.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { DashboardComponent } from 'src/app/componenets/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/componenets/users/users.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    HomeModRoutingModule,
  ]
})
export class HomeModModule { }
