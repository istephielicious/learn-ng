import { NotFoundErr } from './../common/not-found-error';
import { AppErr } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostService) {}

   ngOnInit() {
      this.service.getPosts()
        .subscribe(
          response=> {
            this.posts = response.json();
          }, 
          error=> {
            alert('An unexpected error occurred.');
            console.log(error);
          });
   }

   createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';
    
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        }, 
        (error: Response)=> {
          if(error.status === 400) {
            //form: this.form.setErrors(error.json()); if you have form.
          }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
   }

   updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response=> {
          console.log(response.json)
        }, 
        error=> {
          alert('An unexpected error occurred.');
          console.log(error);
        });
   }

   deletePost(post) {
     this.service.deletePost(500)
      .subscribe(
        response=> {
          let index= this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: AppErr)=> {
          if(error instanceof NotFoundErr)
            alert('This post has already been deleted');
          else
            alert('An unexpected error occurred.');
        });
   }


}
