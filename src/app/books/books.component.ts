import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Observable, combineLatest } from 'rxjs';


@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any;
  constructor(private route: ActivatedRoute, private service: BooksService) { }

  ngOnInit(): void {

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);


    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      this.service.getAll().subscribe(Response => {
        this.books = Response;
      });

    })

  }


}