***REMOVED****
***REMOVED*** Import function triggers from their respective submodules:
***REMOVED***
***REMOVED*** import {onCall} from "firebase-functions/v2/https";
***REMOVED*** import {onDocumentWritten} from "firebase-functions/v2/firestore";
***REMOVED***
***REMOVED*** See a full list of supported triggers at https://firebase.google.com/docs/functions
***REMOVED***/

import {onRequest} from "firebase-functions/v2/https";
import***REMOVED*** as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
