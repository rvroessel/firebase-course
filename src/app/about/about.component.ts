import { Component, OnInit } from "@angular/core";

import "firebase/firestore";

import { AngularFirestore, DocumentChangeAction } from "@angular/fire/compat/firestore";
import { COURSES, findLessonsForCourse } from "./db-data";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  constructor(private db: AngularFirestore) {}

  async uploadData() {
    const coursesCollection = this.db.collection("courses");
    const courses = await this.db.collection("courses").get();
    for (let course of Object.values(COURSES)) {
      const newCourse = this.removeId(course);
      const courseRef = await coursesCollection.add(newCourse);
      const lessons = await courseRef.collection("lessons");
      const courseLessons = findLessonsForCourse(course["id"]);
      console.log(`Uploading course ${course["description"]}`);
      for (const lesson of courseLessons) {
        const newLesson = this.removeId(lesson);
        delete newLesson.courseId;
        await lessons.add(newLesson);
   ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
***REMOVED***

  removeId(data: any) {
    const newData: any = { ...data***REMOVED*****REMOVED***
    delete newData.id;
    return newData;
***REMOVED***

  onReadDoc() {
    this.db
      .doc("/courses/14vtGd4hHgNNUx2pAwOo")
      .get()
      .subscribe((snap) => {
        console.log(snap.data());
        console.log(snap.id);
   ***REMOVED*****REMOVED***);
***REMOVED***

  onReadCollection() {
    this.db
      .collection("courses")
      .get()
      .subscribe((snaps) => {
        snaps.forEach((snap) => {
          console.log(snap.id);
          console.log(snap.data());
          this.onReadLessons(snap.id);
     ***REMOVED*****REMOVED***);
   ***REMOVED*****REMOVED***);
***REMOVED***

  onReadLessons(id: string) {
    this.db
      .collection("courses")
      .doc(id)
      .collection("lessons", (ref) =>
        ref
          .where("seqNo", "<=", 1)
          .where("lessonsCount", "==", 1)
          .orderBy("seqNo")
      )
      .get()
      .subscribe((snaps) => {
        snaps.forEach((snap) => {
          console.log(snap.id);
          console.log(snap.data());
     ***REMOVED*****REMOVED***);
   ***REMOVED*****REMOVED***);
***REMOVED***

  onReadCollectionGroup() {
    this.db
      .collectionGroup("lessons", (ref) => ref.where("seqNo", "==", 1))
      .get()
      .subscribe((snaps) => {
        snaps.forEach((snap) => {
          console.log(snap.id);
          console.log(snap.data());
     ***REMOVED*****REMOVED***);
   ***REMOVED*****REMOVED***);
***REMOVED***

 ***REMOVED*****REMOVED****
  ***REMOVED*** Reads the collection in real-time and logs the document IDs and data.
  ***REMOVED***/
  onReadCollectionRealtimeSnapshotChanges() {
    this.db
      .collection("courses")
      .snapshotChanges()
      .subscribe((snaps: DocumentChangeAction<{id: string}>[]) => {
        snaps.forEach((snap) => {
          console.log(snap.payload.doc.id);
          console.log(snap.payload.doc.data());
     ***REMOVED*****REMOVED***);
   ***REMOVED*****REMOVED***);
***REMOVED***

   ***REMOVED*****REMOVED****
  ***REMOVED*** Reads the collection in real-time and logs the document IDs and data.
  ***REMOVED***/
    onReadCollectionRealtimeValueChanges() {
      this.db
        .collection("courses")
        .valueChanges()
        .subscribe((snaps: unknown[]) => {
          snaps.forEach(snap => {    
            console.log(snap);
       ***REMOVED*****REMOVED***);
     ***REMOVED*****REMOVED***);
 ***REMOVED*****REMOVED***
}
