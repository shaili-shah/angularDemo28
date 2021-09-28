import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  form! : FormGroup
 
  ngOnInit(): void {
    this.form = new FormGroup({
      topics : new FormArray([])
    })
  }

  addTopic(topic : HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value  = '';
  }

  removeTopic(t : any){
    let index = this.topics.controls.indexOf(t);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}