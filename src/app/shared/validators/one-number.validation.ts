import { AbstractControl } from '@angular/forms';

export function ValidateOneNumber(control: AbstractControl) {
  if (!(/\d+/gi.test(control.value))) {
    return {
      oneNumber: true
    };
  }

  return false;
}
