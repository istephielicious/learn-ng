import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDesc = `Angular is one of the most popular frameworks for building client apps with HTML, CSS and TypeScript. If you want to establish yourself as a front-end or a full-stack developer, you need to learn Angular.

  If you've been confused or frustrated jumping from one Angular 4 tutorial to another, you've come to the right place. In this course, Mosh, author of several best-selling courses on Udemy, takes you on a fun and pragmatic journey to master Angular 4. `;
  
  constructor() { }

  ngOnInit() {
  }

}
