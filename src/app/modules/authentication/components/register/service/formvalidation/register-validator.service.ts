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

  getEmailErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
      email: 'The email format is invalid.',
    };
    return this.getErrors(errorMessages, control);
  }

  getUsernameErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
    };
    return this.getErrors(errorMessages, control);
  }

  getPasswordErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
      minlength: `Minimum length is ${
        control?.getError('minlength')?.requiredLength
      }.`,
      pattern:
        'password should have at least : 1 Capital Letter, 1 Special Character, 1 Number',
    };

    return this.getErrors(errorMessages, control);
  }

  getPasswordCheckErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
      passwordMismatched: 'Passwords do not match',
    };

    console.log(control?.errors);

    return this.getErrors(errorMessages, control);
  }

  private getErrors(
    errorMessages: { [key: string]: string },
    control: AbstractControl | null
  ): string[] {
    const errors: string[] = [];
    const controlErrors = control?.errors;
    if (control?.invalid && (control?.touched || control?.dirty)) {
      for (let errorKey in controlErrors) {
        if (errorMessages[errorKey]) {
          errors.push(errorMessages[errorKey]);
        }
      }
    }
    return errors;
  }
}
