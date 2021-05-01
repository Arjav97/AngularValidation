
import { AbstractControl, FormGroup  , ValidatorFn } from '@angular/forms';


export function equalityCheckValidator(fg:FormGroup) : {[key:string]:any} | null {
    const state = fg.get('address.state').value;
    const city = fg.get('address.city').value;
    return state == city ? { equality: true } : null;
 };
  