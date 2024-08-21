import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidatorService } from './service/formvalidation/register-validator.service';
import { FormValidationPipePipe } from '../../pipe/form-validation-pipe.pipe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(private registerValidatorService: RegisterValidatorService) {}
  registerForm = new FormGroup({
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
  });

  ngOnInit(): void {
    this.registerForm.controls['passwordCheck'].addValidators(
      this.registerValidatorService.passwordValidator(
        this.registerForm.controls['password']
      )
    );
  }

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

  getClass(control: string): string {
    return new FormValidationPipePipe().transform(
      control,
      this.registerForm,
      this.getError(control)
    );
  }

  onRegister(event: any) {
    event.preventDefault();
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
