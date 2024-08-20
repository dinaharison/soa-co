import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() inputNgClass = '';
  @Input() containerClass? = 'form-floating mb-3';
  @Input() errors: string[] = [];

  value = '';
  isDisabled = false;
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
}
