import { AbstractControl } from '@angular/forms';

export function ValidateNotNull(control: AbstractControl) {
  if (control.value === '') {
    return {
      NotNull: true
    };
  }
  return null;
}
