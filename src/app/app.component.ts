import { Component } from '@angular/core';
import { FaveArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  courses = [
    {id:1, name: "Course1"},
    {id:2, name: "Course2"},
    {id:3, name: "Course3"}
  ];
  post = {
    title: "Title",
    isFavorite: true
  };

  tweet = {
    body: "Here is the body of the tweet...",
    isLiked: false,
    likesCount: 1
  };


  onfaveChange(args: FaveArgs) {
    console.log("changed: ", args);
  }
}
