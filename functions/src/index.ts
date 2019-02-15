import***REMOVED*** as functions from 'firebase-functions';
import {db} from './init';


import***REMOVED*** as express from "express";
import {Course} from '../../src/app/model/course';
const cors = require('cors');

const app = express();

app.use(cors({origin:true}));


app.get('/courses', async (request, response) => {

    const snaps = await db.collection('courses').get();

    const courses:Course[] = [];

    snaps.forEach(snap => courses.push(snap.data()));

    response.status(200).json({courses});

});


export const getCourses = functions.https.onRequest(app);