import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../nav-service.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValid = true;
  constructor(private navService: NavServiceService, private form: FormBuilder) {

  }

  ngOnInit(): void {
    this.navService.loginRoute();
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  verifyLogin(){
    if(this.loginForm.invalid)
    {
      this.isValid=false;
    }
    else{
      console.log("Hell", this.loginForm.value)
    }
  }
  register(){
    this.navService.registerRoute();
  }
}
