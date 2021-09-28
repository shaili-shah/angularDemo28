import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  form : FormGroup
  constructor(fb : FormBuilder) {
    this.form = fb.group({
      name : ['',Validators.required ],
      contact : fb.group({
        email :['', Validators.required],
        phone :[]
      }),
      topics : fb.array([])
    })
   }

  ngOnInit(): void {
  }

}
