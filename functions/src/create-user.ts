import {auth, db} from "./init";

const express = require('express');
import***REMOVED*** as functions from 'firebase-functions';
import {getUserCredentialsMiddleware} from "./auth.middleware";

const bodyParser = require('body-parser');
const cors = require('cors');

export const createUserApp = express();

createUserApp.use(bodyParser.json());
createUserApp.use(cors({origin:true}));
createUserApp.use(getUserCredentialsMiddleware);


createUserApp.post("/", async (req, res) => {

    functions.logger.debug(`Calling create user function.`);

    try {

        if (!(req["uid"] && req["admin"])) {
            const message = `Denied access to user creation service.`;
            functions.logger.debug(message);
            res.status(403).json({message});
            return;
     ***REMOVED*****REMOVED***

        const email = req.body.email,
            password = req.body.password,
            admin = req.body.admin;

        const user = await auth.createUser({
            email,
            password
     ***REMOVED*****REMOVED***);

        await auth.setCustomUserClaims(user.uid, {admin});

        db.doc(`users/${user.uid}`).set({});


        res.status(200).json({message:"User created successfully."});

 ***REMOVED*****REMOVED***
    catch(err) {
        functions.logger.error(`Could not create user.`, err);
        res.status(500).json({message: "Could not create user."});
 ***REMOVED*****REMOVED***

});

