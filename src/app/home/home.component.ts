import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CourseService } from "../services/courses.services";
import { Course } from "../model/course";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  courses$: Observable<Course[]>;

  beginnersCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.beginnersCourses$ =
      this.courseService.loadCoursesByCategory("BEGINNER");
    this.advancedCourses$ =
      this.courseService.loadCoursesByCategory("ADVANCED");
***REMOVED***
}
