import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  isValid = true;
  constructor(private navService: NavServiceService, private form: FormBuilder) {

  }

  ngOnInit(): void {
    this.navService.registerRoute();
    this.registerForm = this.form.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  verifyLogin(){
    if(this.registerForm.invalid)
    {
      this.isValid=false;
    }
    else{
      console.log("Hell", this.registerForm.value)
    }
  }

  login(){
    this.navService.loginRoute()
  }

}
