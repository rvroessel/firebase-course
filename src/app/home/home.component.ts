import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {CoursesService} from '../services/courses.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    beginnersCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(
      private coursesService: CoursesService,
      public user: UserService,
      private router: Router) {

 ***REMOVED*****REMOVED***

    ngOnInit() {

        this.reloadCourses();

 ***REMOVED*****REMOVED***

    reloadCourses() {

        this.courses$ = this.coursesService.loadAllCourses()
          .pipe(
            catchError(err => {
              console.log(err);
              this.router.navigateByUrl('/login');
              return of([]);
         ***REMOVED*****REMOVED***),
          );
        this.beginnersCourses$ = this.courses$
          .pipe(
            map(courses => courses.filter(course => course.category == 'BEGINNER'))
          );

        this.advancedCourses$ = this.courses$
          .pipe(
            map(courses => courses.filter(course => course.category == "ADVANCED"))
          );
 ***REMOVED*****REMOVED***




}
