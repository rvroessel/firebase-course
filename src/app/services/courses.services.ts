import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map } from "rxjs/operators";
import { mapSnapToCourse } from "./db-utils";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private db: AngularFirestore) {}

  getCourses() {
    return this.db.collection("courses").get();
***REMOVED***

  getCourse(id: string) {
    return this.db.collection("courses").doc(id).get();
***REMOVED***

  addCourse(course: Course) {
    return this.db.collection("courses").add(course);
***REMOVED***

  updateCourse(course: Course) {
    return this.db.collection("courses").doc(course.id).update(course);
***REMOVED***

  deleteCourse(id: string) {
    return this.db.collection("courses").doc(id).delete();
***REMOVED***

  loadCoursesByCategory(category: string): Observable<Course[]> {
    return this.db.collection<Course>("courses",
    ref => 
    ref.where("categories", "array-contains", category)
    .orderBy("seqNo")
    ).snapshotChanges().pipe(
      map(snap => snap.map(mapSnapToCourse))
    )
        
***REMOVED***
}