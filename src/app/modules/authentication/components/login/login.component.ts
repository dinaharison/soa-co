import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginValidatorService } from './service/formvalidation/login-validator.service';
import { FormValidationPipePipe } from '../../pipe/form-validation-pipe.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginValidatorSerice: LoginValidatorService) {}

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  getError(controlName: string): string[] {
    let control = this.loginForm?.get(controlName);
    switch (controlName) {
      case 'email':
        return this.loginValidatorSerice.getEmailErrors(control);
      case 'password':
        return this.loginValidatorSerice.getPasswordErrors(control);
      default:
        throw new Error(
          `Please Implement a validation logic for the control : ${controlName}`
        );
    }
  }

  getClass(control: string) {
    return new FormValidationPipePipe().transform(
      control,
      this.loginForm,
      this.getError(control)
    );
  }

  onLogin(event: any) {
    event.preventDefault();
    if (this.loginForm.invalid) return;
  }
}
