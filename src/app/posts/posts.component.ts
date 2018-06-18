import { BadInput } from './../common/bad-input';
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
      this.service.getAll()
        .subscribe(response=> this.posts = response);
        console.log('POSTS: ',this.posts)
   }

   createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    //add to the view
    this.posts.splice(0, 0, post);

    input.value = '';
    
    this.service.create(post)
      .subscribe(
        createdPost => {
          post['id'] = createdPost.id;
        }, 
        (error: AppErr)=> {
          //rollback
          this.posts.splice(0, 1);

          if(error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw(error);
        });
   }

   updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
   }

   deletePost(post) {
    // this.service.delete(post.id); //Promises are eager

    //delete from the view
    let index= this.posts.indexOf(post);
    this.posts.splice(index, 1);

     this.service.delete(post.id)
      .subscribe(
        null // () => {}
        , 
        (error: AppErr) => {
          //rollback
          this.posts.splice(index, 0, post);

          if(error instanceof NotFoundErr)
            alert('This post has already been deleted');
          else throw(error);
        });
   }


}
