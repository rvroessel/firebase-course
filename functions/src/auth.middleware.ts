
import***REMOVED*** as functions from 'firebase-functions';
import {auth} from "./init";



export function getUserCredentialsMiddleware(req, res, next) {

    functions.logger.debug(`Attempting to extract user credentials from request.`);

    const jwt = req.headers.authorization;


    if (jwt) {
        auth.verifyIdToken(jwt)
            .then(jwtPayload => {

                 req["uid"] = jwtPayload.uid;
                 req["admin"] = jwtPayload.admin;

                functions.logger.debug(
                    `Credentials: uid=${jwtPayload.uid}, admin=${jwtPayload.admin}`);

                next();
         ***REMOVED*****REMOVED***)
            .catch(err => {
                console.log("Error ocurred while validating JWT", err);
                next();
         ***REMOVED*****REMOVED***);

 ***REMOVED*****REMOVED***
    else {
        next();
 ***REMOVED*****REMOVED***


}
