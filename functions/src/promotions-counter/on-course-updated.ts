import***REMOVED*** as functions from 'firebase-functions';
import {db} from '../common/init';
import {firestore} from 'firebase-admin/lib/firestore';
import FieldValue = firestore.FieldValue;

export default async(change, context) => {

  if (context.params.courseId == 'stats') {
    return;
***REMOVED***

  functions.logger.debug(`Running update course trigger for courseId ${context.params.courseId}`);

  const newData = change.after.data(),
    oldData = change.before.data();

  let increment = 0;

  if (!oldData.promo && newData.promo) {
    increment = 1;
***REMOVED***
  else if (oldData.promo && !newData.promo) {
    increment = -1;
***REMOVED***

  return db.doc(`courses/stats`).update({
    "totalPromo": FieldValue.increment(increment)
***REMOVED***);
}
