import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import***REMOVED*** as firebase from 'firebase/app';
import 'firebase/firestore';
import {Course} from '../model/course';

const config = {
    apiKey: "AIzaSyDg8hs704siPZ_chdtodWYpXicMHxz5nhQ",
    authDomain: "fir-course-recording.firebaseapp.com",
    databaseURL: "https://fir-course-recording.firebaseio.com",
    projectId: "fir-course-recording",
    storageBucket: "fir-course-recording.appspot.com",
    messagingSenderId: "706691571098"
***REMOVED***

firebase.initializeApp(config);

const db = firebase.firestore();

const settings = {timestampsInSnapshots:true***REMOVED***

db.settings(settings);



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {

***REMOVED***

  ngOnInit() {

      db.collection('courses').get()
          .then(snaps => {


              const courses : Course[] = snaps.docs.map(snap => {

                  return <Course>{
                    id: snap.id,
                    ...snap.data()
               ***REMOVED*****REMOVED***
               ***REMOVED*****REMOVED***);

              console.log(courses);

       ***REMOVED*****REMOVED***);

***REMOVED***

}
















