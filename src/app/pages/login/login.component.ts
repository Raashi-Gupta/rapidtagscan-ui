import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginValidationService } from 'src/app/services/login-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router, private loginValidationService: LoginValidationService) {
    this.reactiveForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  onReactiveSubmit(formData: any) {
    if (this.reactiveForm.valid) {
      this.loginValidationService.validateLogin(formData.email,formData.password)
    }
  }

}
