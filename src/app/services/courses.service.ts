

import {Injectable} from "@angular/core";
import {NEVER, never, Observable, of} from 'rxjs';
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";



@Injectable()
export class CoursesService {

    constructor() {

 ***REMOVED*****REMOVED***

    findCourseById(courseId: number): Observable<Course> {
        return NEVER;
 ***REMOVED*****REMOVED***

    findAllCourses(): Observable<Course[]> {
        return of([]);
 ***REMOVED*****REMOVED***

    findAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return of([]);
 ***REMOVED*****REMOVED***

    findLessons(
        courseId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return of([]);
 ***REMOVED*****REMOVED***

}
