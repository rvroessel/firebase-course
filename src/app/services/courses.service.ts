

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

 ***REMOVED*****REMOVED***

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`/api/courses/${courseId}`);
 ***REMOVED*****REMOVED***

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
 ***REMOVED*****REMOVED***

    findAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
     ***REMOVED*****REMOVED***).pipe(
            map(res =>  res["payload"])
        );
 ***REMOVED*****REMOVED***

    findLessons(
        courseId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
     ***REMOVED*****REMOVED***).pipe(
            map(res =>  res["payload"])
        );
 ***REMOVED*****REMOVED***

}