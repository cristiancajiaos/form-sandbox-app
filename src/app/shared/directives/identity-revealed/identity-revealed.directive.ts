
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: IdentityRevealedDirective,
    multi: true
  }]
})

export class IdentityRevealedDirective implements Validator {
  identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');

    return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true} : null;
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.identityRevealedValidator(control);
  }
}
