import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavServiceService } from '../nav-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  isValid = true;
  loading=false;
  toastTitle: string = 'Toast Title';
  toastMessage: string = 'This is a toast message';
  constructor(private navService: NavServiceService, private form: FormBuilder, private localStorage: LocalStorageService) {

  }

  ngOnInit(): void {
    this.navService.registerRoute();
    this.registerForm = this.form.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  async verifyLogin(){
    if(this.registerForm.invalid)
    {
      this.loading = true;
      this.isValid=false;
      setTimeout(() => {
        this.loading=false;
      }, 100);
    }
    else{
      this.loading=true;
      const res= await this.localStorage.registeruser(this.registerForm.value.email,this.registerForm.value);
      setTimeout(()=>{
        this.loading=false;
      }, 2000)
      this.login();
    }
  }

  login(){
    this.navService.loginRoute()
  }

}
