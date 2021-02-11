import***REMOVED*** as functions from 'firebase-functions';
import {db} from '../common/init';


export default async (snap, context) => {

  functions.logger.debug('Running add course trigger');

  const course = snap.data();

  return db.runTransaction(async (transaction) => {

    const counterRef = db.doc('courses/stats');

    const counterSnap = await transaction.get(counterRef);

    const counter = counterSnap.data() ?? {totalPromo: 0***REMOVED***

    if (course.promo) {
      counter.totalPromo += 1;
      functions.logger.debug('Course in promotion, incremented counter.');
 ***REMOVED*****REMOVED***
    else {
      functions.logger.debug('Course NOT in promotion.');
 ***REMOVED*****REMOVED***

    transaction.set(counterRef, counter);

***REMOVED***);

***REMOVED***
