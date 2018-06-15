import { NotFoundErr } from './../common/not-found-error';
import { Observable } from 'rxjs/Rx';
import { AppErr } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);    
  }

  createPost(post) {
    return this.http.post( this.url, JSON.stringify(post) );
  }

  updatePost(post) {
    //  this.http.put(this.url, JSON.stringify(post));
    return this.http.patch(this.url+'/'+post.id , JSON.stringify({isRead:true}));
  }

  deletePost(id: number) {
    return this.http.delete(this.url+'/'+id)
      .catch((error: Response)=> {
        if(error.status === 404)
          return Observable.throw(new NotFoundErr());

        return Observable.throw(new AppErr(error))
      });
  }
}
