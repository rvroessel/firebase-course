import***REMOVED*** as functions from "firebase-functions";
import {createUserApp} from "./create-user";

//
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//


export const createUser = functions.https.onRequest(createUserApp);


export const onAddCourseUpdatePromoCounter =
    functions
        .runWith({
            timeoutSeconds: 300,
            memory: "128MB"
     ***REMOVED*****REMOVED***)
        .firestore.document("courses/{courseId}")
        .onCreate(async(snap, context) => {
            await (
                await import("./promotions-counter/on-add-course"))
                .default(snap, context);
     ***REMOVED*****REMOVED***);


export const onCourseUpdatedUpdatePromoCounter =
    functions.firestore
        .document('courses/{courseId}')
        .onUpdate(async (change, context) => {
            await (await import('./promotions-counter/on-course-updated'))
                .default(change, context);

     ***REMOVED*****REMOVED***)

export const onCourseDeletedUpdatePromoCounter =
    functions.firestore
        .document('courses/{courseId}')
        .onDelete(async(snap, context) => {
            await (
                await import("./promotions-counter/on-delete-course"))
                .default(snap, context);
     ***REMOVED*****REMOVED***)
