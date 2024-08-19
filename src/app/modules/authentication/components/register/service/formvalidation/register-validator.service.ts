import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterValidatorService {
  constructor() {}
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let passwordCheck: string = control.get('passwordCheck')?.value;
      let password: string = control.get('password')?.value;

      if (!password || !passwordCheck) return null;
      if (password !== passwordCheck) return { passwordMismatched: true };
      return null;
    };
  }

  getError(control: AbstractControl | null): string[] {
    const errors: string[] = [];
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
      minlength: `Minimum length is ${
        control?.getError('minlength')?.requiredLength
      }.`,
      pattern: 'the password should have at least ',
      email: 'The email format is invalid.',
      // Add more validation rules here as needed
    };

    for (let errorKey in control?.errors) {
      if (errorMessages[errorKey]) {
        errors.push(errorMessages[errorKey]);
      }
    }
    return errors;
  }
}
