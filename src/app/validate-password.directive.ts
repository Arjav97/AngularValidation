import { Directive } from '@angular/core';
import { NG_VALIDATORS , Validator ,  AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [{
    provide : NG_VALIDATORS , 
    useExisting: ValidatePasswordDirective,
    multi: true
  }]
})

export class ValidatePasswordDirective implements Validator {

  validate(control:AbstractControl) : {[key:string]:any} | null {
      if(!control.value){
        return null;
      }
      console.log("In directive "+ control.value);
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { 'invalidPassword':true};  
  }
}
