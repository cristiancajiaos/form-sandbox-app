import { AbstractControl } from '@angular/forms';

export function ValidateFoo(control: AbstractControl) {
  if (!control.value.includes('foo')) {
    return {
      notFoo: true
    };
  }

  return null;
}
