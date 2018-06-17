import { NotFoundErr } from './../common/not-found-error';
import { BadInput } from '../common/bad-input';
// import { Observable } from 'rxjs/Rx';
import { AppErr } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
      .catch(this.handleError);    
  }

  create(resource) {
    return this.http.post( this.url, JSON.stringify(resource) )
      .catch(this.handleError);
  }

  update(resource) {
    //  this.http.put(this.url, JSON.stringify(post));
    return this.http.patch(this.url+'/'+resource.id , JSON.stringify({isRead:true}))
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url+'/'+id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 404)
      return Observable.throw(new NotFoundErr());
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    
    return Observable.throw(new AppErr(error.json()))
  }
}
