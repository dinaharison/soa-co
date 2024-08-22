import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormControlComponent,
      multi: true,
    },
  ],
})
export class FormControlComponent implements ControlValueAccessor {
  @Input() type? = 'text';
  @Input() id = '';
  @Input() name? = this.id;
  @Input() inputClass = 'form-control';
  @Input() label = this.id;
  @Input() inputNgClass = '';
  @Input() containerClass? = 'form-floating mb-3 mw-75';
  @Input() errors: string[] = [];
  @Input() isPassword?: boolean = false;

  value = '';
  isDisabled = false;
  showPassword = false;
  faLock = faLock;
  faLockOpen = faLockOpen;

  onChange: (value: any) => void = () => null;
  onTouched: () => void = () => null;

  onInputChanged(event: any) {
    this.onTouched();
    this.value = event.target.value;
    this.onChange(this.value);
  }

  getClass(): string {
    return '';
  }

  getError(): string[] {
    return [];
  }

  writeValue(obj: any): void {
    if (!obj) return;
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  tooglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) this.type = 'text';
    else this.type = 'password';
  }
}
