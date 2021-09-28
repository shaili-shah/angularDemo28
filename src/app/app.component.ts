import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFavDemo';

  stitle = "shipping title";
  btitle = "billing title";

  obj = {
    isSelected : true,
    likesCount : 21
  }

}
