import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) {
    super ('https://jsonplaceholder.typicode.com/posts', http);
  }

































  // getPosts() {
  //   return this.http.get(this.url)
  //     .catch(this.handleError);
  // }

  // createPost(post) {
  //   return this.http.post( this.url, JSON.stringify(post) )
  //     .catch(this.handleError);
  // }

  // updatePost(post) {
  //    //this.http.put(this.url, JSON.stringify(post));
  //   return this.http.patch(this.url+'/'+post.id , JSON.stringify({isRead:true}))
  //     .catch(this.handleError);
  // }

  // deletePost(id: number) {
  //   return this.http.delete(this.url+'/'+id)
  //     .catch(this.handleError);
  // }

  // private handleError(error: Response) {
  //   if(error.status === 404)
  //     return Observable.throw(new NotFoundErr());
  //   if(error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));

  //   return Observable.throw(new AppErr(error.json()))
  // }
}
