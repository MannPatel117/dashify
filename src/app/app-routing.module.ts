import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './loggedOut-pages/main/main.component';
import { LoginComponent } from './loggedOut-pages/login/login.component'
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './loggedOut-pages/register/register.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
