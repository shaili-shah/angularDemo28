import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  
  task = {
    title : 'task',
    assignee : {name : null}
  }

 @Input('isSelected') isSelected = false;
 @Input('likesCount') likesCount = 10;
  
 OnclickFav(){
   this.likesCount += this.isSelected ? -1 : 1;
   this.isSelected = !this.isSelected;
 }
}