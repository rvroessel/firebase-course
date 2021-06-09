import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course} from '../model/course';
import {catchError, concatMap, last, map, take, tap} from 'rxjs/operators';
import {from, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'create-course',
  templateUrl: 'create-course.component.html',
  styleUrls: ['create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  courseId:string;

  percentageChanges$: Observable<number>;


  form = this.fb.group({
     description:  ['', Validators.required],
      category: ["BEGINNER", Validators.required],
      url: [''],
      longDescription: ['', Validators.required],
      promo: [false],
      promoStartAt: [null]
***REMOVED***);

  constructor(private fb:FormBuilder,
              private coursesService:CoursesService,
              private afs: AngularFirestore,
              private router: Router,
              private storage: AngularFireStorage) {

***REMOVED***

    uploadThumbnail(event) {

      const file:File = event.target.files[0];

      console.log(file.name);

      const filePath = `courses/${this.courseId}/${file.name}`;

      const task = this.storage.upload(filePath, file, {
          cacheControl: "max-age=2592000,public"
   ***REMOVED*****REMOVED***)

       this.percentageChanges$ = task.percentageChanges();


        task.snapshotChanges().subscribe();


 ***REMOVED*****REMOVED***

  ngOnInit() {
      this.courseId = this.afs.createId();
***REMOVED***

    onCreateCourse() {

        const val = this.form.value;

        const newCourse: Partial<Course> = {
            description:  val.description,
            url: val.url,
            longDescription: val.longDescription,
            promo: val.promo,
            categories: [val.category]
     ***REMOVED*****REMOVED***;

      newCourse.promoStartAt = Timestamp.fromDate(this.form.value.promoStartAt);

      this.coursesService.createCourse(newCourse, this.courseId)
          .pipe(
              tap(course => {
                  console.log("Created new course: ", course);
                  this.router.navigateByUrl("/courses");
           ***REMOVED*****REMOVED***),
              catchError(err => {
                  console.log(err);
                  alert("Could not create the course.");
                  return throwError(err);
           ***REMOVED*****REMOVED***)
          )
          .subscribe();




 ***REMOVED*****REMOVED***
}
