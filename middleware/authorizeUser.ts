import jwt from 'jsonwebtoken';
const Trainer = require('../models/Trainer');
const Client = require('../models/Client');
const keys = require('../config/keys');
require('dotenv').config();
const setJWT = require('./setJWT');


module.exports = (req: any, res: any, next: any) => {
    const token = req.cookies['authorization'];
    console.log(req.cookies);
    if (!token) {
        const error = {
            code: 401,
            message: 'Not authorized'
        }
        req.error = error;
        next();
    } else {
        jwt.verify(token, keys.ACCESS_TOKEN_SECRET, async (err: any, userData: any) => {
            console.log(userData);
            if (err) {
                const error = {
                    code: 403,
                    message: 'Wrong Password'
                };
                req.error = error;
                next();
            } else {
                if (userData.userType === "TRAINER") {
                    const currentUser = await Trainer.findOne({ _id: userData.userId });
                    res.send(currentUser)
                } else {
                    const currentUser = await Client.findOne({ _id: userData.userId });
                    res.send(currentUser);
                }
            }
        });
    }
}