import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;


  constructor(private service: NewService) {

  }

  addPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.add(post).subscribe(
      (response: any) => {
        post.id = response;
        //this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        this.posts.splice(0,)
        if (error.status == 400) {
          // this.form.setErrors(error);
        } else {
          throw error;
        }
      });
  }

  updatePost(post: any) {
    post.title = "Sh@ili";
    this.service.edit(post).subscribe(
      response => {
        console.log(response);
      },
      error => {
        throw error;
      })
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1)

    this.service.delete(post.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.posts.splice(0, 1, post);
        if (error.status === 404) {
          alert('post is already deleted.')
        } else {
          throw error;
        }
      }
    )

  }

  ngOnInit(): void {

    this.service.getAll().subscribe(
      response => {
        this.posts = response;
      });

  }

}