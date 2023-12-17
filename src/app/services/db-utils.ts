import { DocumentChangeAction, QuerySnapshot } from "@angular/fire/firestore";

export function convertSnaps<T>(snaps: QuerySnapshot<T>): T[] {
    return snaps.docs.map(snap => {
      return {
        id: snap.id,
        ...snap.data()
   ***REMOVED*****REMOVED*** as T;
 ***REMOVED*****REMOVED***);
***REMOVED***;


  export function mapSnapToCourse<T>(snap: DocumentChangeAction<T>): T {
    return {
      id: snap.payload.doc.id,
      ...snap.payload.doc.data()
 ***REMOVED*****REMOVED*** as T;
***REMOVED***;