import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  courses = [
    {id : 1 , name : 'angular'},
    {id : 2 , name : 'mvc'},
    {id : 3 , name : 'react'}
  ]

  submit(form : any){
console.log(form);
  }
}