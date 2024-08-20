import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'formValidationPipe',
  standalone: true,
})
export class FormValidationPipePipe implements PipeTransform {
  transform(
    controlName: string,
    formControl: AbstractControl,
    errors: string[]
  ): string {
    let control = formControl?.get(controlName);
    if (control?.touched || control?.dirty) {
      return errors.length > 0 ? 'is-invalid' : 'is-valid';
    }
    return '';
  }
}
