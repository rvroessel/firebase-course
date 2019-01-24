import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import***REMOVED*** as firebase from 'firebase/app';
import 'firebase/firestore';
import {Course} from '../model/course';
import {AngularFirestore} from '@angular/fire/firestore';
import {of} from 'rxjs';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private db: AngularFirestore) {

 ***REMOVED*****REMOVED***

    ngOnInit() {

        const courseRef = this.db.doc('/courses/JVXlcA6ph98c7Vg2nc4E')
            .snapshotChanges()
            .subscribe(snap => {

                const course:any = snap.payload.data();

         ***REMOVED*****REMOVED***);

        const ref = this.db.doc('courses/MsU0Mz7pNSbnhzYSkt9y')
            .snapshotChanges()
            .subscribe(
                doc => console.log("ref", doc.payload.ref)
            )


 ***REMOVED*****REMOVED***

    save() {

        const firebaseCourseRef =
            this.db.doc('/courses/JVXlcA6ph98c7Vg2nc4E').ref;

        const rxjsCourseRef =
            this.db.doc('/courses/MsU0Mz7pNSbnhzYSkt9y').ref;

        const batch = this.db.firestore.batch();

        batch.update(firebaseCourseRef, {titles: {description:'Firebase Course'}});

        batch.update(rxjsCourseRef, {titles: {description:'RxJs Course'}});

        const batch$ = of(batch.commit());

        batch$.subscribe();

 ***REMOVED*****REMOVED***

    async runTransaction() {

        const newCounter = await this.db.firestore
            .runTransaction(async transaction => {

            console.log('Running transaction...');

            const courseRef = this.db.doc('/courses/JVXlcA6ph98c7Vg2nc4E').ref;

            const snap = await transaction.get(courseRef);

            const course = <Course> snap.data();

            const lessonsCount =  course.lessonsCount + 1;

            transaction.update(courseRef, {lessonsCount});

            return lessonsCount;

     ***REMOVED*****REMOVED***);

        console.log("result lessons count = ",newCounter);

 ***REMOVED*****REMOVED***

}
















