import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginValidatorService {
  constructor() {}

  getEmailErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
      email: 'The email format is invalid.',
    };
    return this.getErrors(errorMessages, control);
  }

  getPasswordErrors(control: AbstractControl | null): string[] {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required.',
    };

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
