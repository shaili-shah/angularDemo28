import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

    this.form = fb.group({
      oldPassword : ['',Validators.required , PasswordValidator.CheckOldPassword],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, {
      validator:  ConfirmedValidator('password', 'confirm_password')
    })
  }

  get f() {
    return this.form.controls;
  }
}