import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.css']
})
export class ChangePassFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required,
                    PasswordValidators.isEqualOldPass],

      newPass: ['', [Validators.required,
                    Validators.minLength(4)]],

      confirmPass: ['', [Validators.required]]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPass() {
    return this.form.get('oldPass');
  }

  get newPass() {
    return this.form.get('newPass');
  }

  get confirmPass() {
    return this.form.get('confirmPass');
  }

  check() {
    console.log(this.form);
  }


}
