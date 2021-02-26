import {Component, OnInit} from '@angular/core';


import 'firebase/firestore';

import {AngularFirestore} from '@angular/fire/firestore';
import {COURSES, findLessonsForCourse} from './db-data';



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  constructor(private db: AngularFirestore) {}

  async uploadData() {
    const coursesCollection = this.db.collection('courses');
    const courses = await this.db.collection('courses').get();
    for (let course of Object.values(COURSES)) {
      const newCourse = this.removeId(course);
      const courseRef = await coursesCollection.add(newCourse);
      const lessons = await courseRef.collection('lessons');
      const courseLessons = findLessonsForCourse(course['id']);
      console.log(`Uploading course ${course['description']}`);
      for (const lesson of courseLessons) {
        const newLesson = this.removeId(lesson);
        await lessons.add(newLesson);
   ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
***REMOVED***

  removeId(data: any) {
    const newData: any = {...data***REMOVED***
    delete newData.id;
    return newData;
***REMOVED***


    onReadDoc() {

      this.db.doc("/courses/3ZhoNEWSGUcfWOV8IifA").get()
          .subscribe(snap => {

              console.log(snap.id);
              console.log(snap.data());

       ***REMOVED*****REMOVED***);

 ***REMOVED*****REMOVED***
}
















