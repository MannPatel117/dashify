import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from 'src/app/componenets/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/componenets/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
  children: [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'users', component: UsersComponent,}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModRoutingModule { }
