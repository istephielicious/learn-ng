import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static isEqualOldPass(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                
                if(control.value === '1234')
                    resolve(null);
                else
                    resolve({ isEqualOldPass: true});
            },2000);
        });
    }
    // static passwordsShouldMatch(newPass): ValidatorFn {
    //     return (control: AbstractControl): ValidationErrors | null => {
    //         if(newPass !== control.value)
    //             return {passwordsShouldMatch: {requiredStr: newPass,
    //                 actualStr: control.value}};
    //         return null;
    //     }
    // }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors | null {
        let newPass = control.get('newPass');
        let confirmPass = control.get('confirmPass');
        
        if(newPass.value !== confirmPass.value)
            return {passwordsShouldMatch: true};
        return null;
    }
}