import { DocumentChangeAction, QuerySnapshot } from "@angular/fire/compat/firestore";

export function convertSnaps<T>(snaps: QuerySnapshot<T>): T[] {
    return snaps.docs.map(snap => {
      return {
        id: snap.id,
        ...snap.data()
      } as T;
    });
  };


  export function mapSnapToCourse<T>(snap: DocumentChangeAction<T>): T {
    return {
      id: snap.payload.doc.id,
      ...snap.payload.doc.data()
    } as T;
  };