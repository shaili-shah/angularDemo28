import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  courses = [1,2];  
  test : any;

  loadTest(){
    this.test = [
      {id : 1 , name : 'test1'},
      {id : 2 , name : 'test2'},
      {id : 3 , name : 'test3'}
    ];
  }

  // trackTest(index : any,test : any){
  //   return test? test.id : undefined;
  // }

  Add(){
    this.test.push({id:4 , name : 'test4'});
  }

  removeTest(i : any){
    let index = this.test.indexOf(i);  
    this.test.splice(index,i);
  }
}