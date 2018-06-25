import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FollowerService extends DataService {
    constructor(http: Http) {
        // super('https://jsonplaceholder.typicode.com/users', http);
        // super('https://api.github.com/users/mosh-hamedani/followers', http);
        super('http://localhost:8080/employees', http);
    }
}
