import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './loggedOut-pages/main/main.component';
import { LoginComponent } from './loggedOut-pages/login/login.component';
import { RegisterComponent } from './loggedOut-pages/register/register.component';
import { AuthGuard } from '../app/AuthGuard';
import { LoggedIn } from './LoggedIn';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoggedIn]},
  {path: 'home',  loadChildren:()=> import('./pages/home-mod/home-mod.module').then(mod => mod.HomeModModule), canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedIn]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
