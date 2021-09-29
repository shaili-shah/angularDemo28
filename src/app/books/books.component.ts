import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : any;
  constructor(private service : BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
     this.service.getAll().subscribe(Response => {
        this.books = Response;
     });
  }

}
