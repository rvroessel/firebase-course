import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course} from '../model/course';
import {from, Observable, of, throwError} from 'rxjs';
import {catchError, concatMap, first, map, shareReplay, take, tap} from 'rxjs/operators';
import {convertSnaps} from './db-utils';
import {Lesson} from '../model/lesson';
import firebase from 'firebase/app';
import OrderByDirection = firebase.firestore.OrderByDirection;


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private afs: AngularFirestore) {}

  loadAllCourses(): Observable<Course[]> {
    return this.afs.collection(
      'courses',
      ref => ref.orderBy('seqNo')
    )
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Course>(snaps)),
        tap(console.log),
        first(),
        shareReplay()
      );
***REMOVED***

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.afs.collection('courses',
      ref => ref.where('url', '==', courseUrl))
      .snapshotChanges()
      .pipe(
        map(snaps => {

          const courses = convertSnaps<Course>(snaps);

          return courses.length == 1 ? courses[0] : undefined;
     ***REMOVED*****REMOVED***),
        first()
      );
***REMOVED***

  findLessons(courseId: string, sortOrder: OrderByDirection = 'asc',
              pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

    return this.afs.collection(`courses/${courseId}/lessons`,
      ref => ref.orderBy('seqNo', sortOrder)
        .limit(pageSize)
        .startAfter(pageNumber***REMOVED*** pageSize))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Lesson>(snaps)),
        first()
      );

***REMOVED***
  createCourse(newCourse: Partial<Course>, courseId?:string) {
    return this.afs.collection<Course>('courses', ref => ref.orderBy('seqNo', 'desc').limit(1))
      .valueChanges()
      .pipe(
        first(),
        concatMap(courses => {

          const lastCourseSeqNo = courses[0]?.seqNo ?? 0;

          const course = {
            ...newCourse,
            seqNo: lastCourseSeqNo + 1
       ***REMOVED*****REMOVED***;

          let save$: Observable<any>;

          if (courseId) {
            save$ = from(this.afs.doc(`courses/${courseId}`).set(course));
       ***REMOVED*****REMOVED***
          else {
            save$ = from(this.afs.collection('courses').add(course));
       ***REMOVED*****REMOVED***

          return save$
            .pipe(
              map(res => {
                return {
                  id: courseId ?? res.id,
                  ...course
             ***REMOVED*****REMOVED***;
           ***REMOVED*****REMOVED***)
            );
     ***REMOVED*****REMOVED***)
      );
***REMOVED***

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return from(this.afs.doc(`courses/${courseId}`).update(changes));
***REMOVED***


  deleteCourse(courseId: string) {
    return from(this.afs.doc(`courses/${courseId}`).delete());
***REMOVED***

}





















