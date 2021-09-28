import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form! : FormGroup


  ngOnInit(): void {
    this.form = new FormGroup({

      account : new FormGroup({

        username : new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          UserNameValidators.canNotContainSpace
        ],UserNameValidators.shouldBeUnique)

      }),

      password : new FormControl('',[
        Validators.required
      ])
    });
  }
 
  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('password');
  }
  
  // login(){
  //       this.form.setErrors({
  //         invalidlogin : true
  //       })
    
  // }

}
