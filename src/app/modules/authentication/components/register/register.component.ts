import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidatorService } from '../../services/validators/register-validator.service';

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

  onRegister(event: any) {
    event.preventDefault();
  }
}
