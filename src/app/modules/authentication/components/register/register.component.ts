import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { RegisterValidatorService } from './service/formvalidation/register-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private registerValidatorService: RegisterValidatorService) {}
  registerForm = new FormGroup(
    {
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      username: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[\\W])(?=.*\\d).*$'),
        ],
      }),
      passwordCheck: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    { validators: [this.registerValidatorService.passwordValidator()] }
  );

  getError(controlName: string): string[] {
    let control = this.registerForm?.get(controlName);
    switch (controlName) {
      case 'email':
        return this.registerValidatorService.getEmailErrors(control);
      case 'password':
        return this.registerValidatorService.getPasswordErrors(control);
      case 'username':
        return this.registerValidatorService.getUsernameErrors(control);
      case 'passwordCheck':
        return this.registerValidatorService.getPasswordCheckErrors(control);
      default:
        throw new Error(
          `Please Implement a validation logic for the control : ${controlName}`
        );
    }
  }

  getClass(controlName: string): string | null {
    let control = this.registerForm?.get(controlName);
    if (control?.touched || control?.dirty) {
      return this.getError(controlName).length > 0 ? 'is-invalid' : 'is-valid';
    }
    return null;
  }

  onRegister(event: any) {
    event.preventDefault();
  }
}
