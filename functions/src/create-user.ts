
const express = require('express');
import***REMOVED*** as functions from 'firebase-functions';


export const createUserApp = express();


createUserApp.post("/", async (req, res) => {

    functions.logger.debug(`Calling create user function.`);

    try {


        res.status(200).json({message:"User created successfully."});

 ***REMOVED*****REMOVED***
    catch(err) {
        functions.logger.error(`Could not create user.`, err);
        res.status(500).json({message: "Could not create user."});
 ***REMOVED*****REMOVED***

});

