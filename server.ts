import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import fileupload from 'express-fileupload';
const Trainer = require('./models/Trainer');
const setJWT = require('./middleware/setJWT');
const bcrypt = require('bcryptjs');

const keys = require('./config/keys');

const app = express();
app.use(fileupload());
const client = require('./config/db')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// const newTrainer = new Trainer({
//     firstName: 'John',
//     lastName: "Smith",
//     username: "jsmith",
//     schoolName: 'Pro School',
//     password: bcrypt.hashSync('password', 10),
//     about: 'Tell me something about your course that will be displayed',
//     contacts: {
//         phone: 362781273,
//         address: {
//             country: "US",
//             state: "TX",
//             city: "Austin",
//             zipCode: 78728
//         },
//         email: "jsmith@gmail.com"
//     },
//     courses: [],
//     sales: [],
//     users: []
// });

// newTrainer.save();


require('./routes/index')(app, client);
//Connect Database

//Connect routes

//

const PORT = 5000;

app.listen(PORT, () => console.log('Server is running on port 3001'));