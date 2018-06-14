import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  // template: `
  //         <h2>{{title}}</h2>

  //         <ul *ngFor = "let element of courses">
  //             <li>{{element}}</li>
  //         </ul>
  // `,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of Courses";
  courses;
  course = {
    title: "Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor(private coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }


  ngOnInit() {
  }

}
