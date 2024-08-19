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
    if (control?.invalid && (control?.touched || control?.dirty)) {
      return this.registerValidatorService.getError(control);
    } else {
      return [];
    }
  }

  async getClass(controlName: string): Promise<string> {
    let control = this.registerForm?.get(controlName);
    if (control?.invalid && (control?.touched || control?.dirty)) {
      return this.getError(controlName).length > 0 ? 'is-invalid' : 'is-valid';
    } else {
      return '';
    }
  }

  onRegister(event: any) {
    event.preventDefault();
  }
}
