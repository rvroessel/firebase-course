
import***REMOVED*** as functions from 'firebase-functions';
import {db} from './init';


export const onAddLesson =
functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
    .onCreate(async (snap,context) => {

        console.log("Running onAddLesson trigger ...");

        return courseTransaction(snap, course => {
            return {lessonsCount: course.lessonsCount + 1}
     ***REMOVED*****REMOVED***);

 ***REMOVED*****REMOVED***);

export const onDeleteLesson =
    functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
        .onDelete(async (snap,context) => {

            console.log("Running onDeleteLesson trigger ...");

            return courseTransaction(snap, course => {
                return {lessonsCount: course.lessonsCount - 1}
         ***REMOVED*****REMOVED***);

     ***REMOVED*****REMOVED***);



function courseTransaction(snap, cb:Function) {
    return db.runTransaction(async transaction => {

        const courseRef = snap.ref.parent.parent;

        const courseSnap = await transaction.get(courseRef);

        const course = courseSnap.data();

        const changes = cb(course);

        transaction.update(courseRef, changes);

 ***REMOVED*****REMOVED***);

}