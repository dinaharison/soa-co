import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
}
