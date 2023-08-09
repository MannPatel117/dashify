import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../nav-service.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValid = true;
  constructor(private navService: NavServiceService,
     private form: FormBuilder,
      private localStorage: LocalStorageService,
       private toastService: ToastServiceService,
        private sessionStorage:SessionStorageService,
        private router: Router) {

  }
  showStandard() {
		this.toastService.show('SUCCESS!', { classname: 'bg-success text-light'});
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
      this.localStorage.loginUser(this.loginForm.value.email,this.loginForm.value);
      this.sessionStorage.createSession();
      this.showStandard();
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    }
  }
  register(){
    this.navService.registerRoute();
  }
}
