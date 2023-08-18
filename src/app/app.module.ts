import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loggedOut-pages/login/login.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './loggedOut-pages/register/register.component';
import { MainComponent } from './loggedOut-pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    NgbTooltipModule,
     ToastComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
