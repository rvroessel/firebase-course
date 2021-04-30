import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import {from, Observable, of} from "rxjs";
import {Course} from "../model/course";
import {concatMap, map, tap} from "rxjs/operators";
import {convertSnaps} from "./db-utils";
import {Lesson} from "../model/lesson";


@Injectable({
    providedIn: "root"
})
export class CoursesService {

    constructor(private db: AngularFirestore) {

 ***REMOVED*****REMOVED***

    deleteCourseAndLessons(courseId:string) {
        return this.db.collection(`courses/${courseId}/lessons`)
            .get()
            .pipe(
                concatMap(results => {

                    const lessons = convertSnaps<Lesson>(results);

                    const batch = this.db.firestore.batch();

                    const courseRef = this.db.doc(`courses/${courseId}`).ref;

                    batch.delete(courseRef);

                    for (let lesson of lessons) {
                        const lessonRef =
                            this.db.doc(`courses/${courseId}/lessons/${lesson.id}`).ref;

                        batch.delete(lessonRef);
                 ***REMOVED*****REMOVED***

                    return from(batch.commit());

             ***REMOVED*****REMOVED***)
            );
 ***REMOVED*****REMOVED***

    deleteCourse(courseId:string) {
        return from(this.db.doc(`courses/${courseId}`).delete());
 ***REMOVED*****REMOVED***

    updateCourse(courseId:string, changes: Partial<Course>):Observable<any> {
        return from(this.db.doc(`courses/${courseId}`).update(changes));
 ***REMOVED*****REMOVED***

    createCourse(newCourse: Partial<Course>, courseId?:string) {
        return this.db.collection("courses",
                ref => ref.orderBy("seqNo", "desc").limit(1))
            .get()
            .pipe(
                concatMap(result => {

                    const courses = convertSnaps<Course>(result);

                    const lastCourseSeqNo = courses[0]?.seqNo ?? 0;

                    const course = {
                        ...newCourse,
                        seqNo: lastCourseSeqNo + 1
                 ***REMOVED*****REMOVED***

                    let save$: Observable<any>;

                    if (courseId) {
                        save$ = from(this.db.doc(`courses/${courseId}`).set(course));
                 ***REMOVED*****REMOVED***
                    else {
                        save$ = from(this.db.collection("courses").add(course));
                 ***REMOVED*****REMOVED***

                    return save$
                        .pipe(
                            map(res => {
                                return {
                                    id: courseId ?? res.id,
                                    ...course
                             ***REMOVED*****REMOVED***
                         ***REMOVED*****REMOVED***)
                        );


             ***REMOVED*****REMOVED***)
            )
 ***REMOVED*****REMOVED***

    loadCoursesByCategory(category:string): Observable<Course[]> {
         return this.db.collection(
            "courses",
            ref => ref.where("categories", "array-contains", category)
                .orderBy("seqNo")
            )
            .get()
             .pipe(
                 map(result => convertSnaps<Course>(result))
             );

 ***REMOVED*****REMOVED***

}
