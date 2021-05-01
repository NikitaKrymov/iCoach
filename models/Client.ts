import { truncate } from 'fs';
import mongoose from 'mongoose';
import { CLIENT } from '../interfaces/clientInterfaces/Client';

const ClientSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String, 
        require: true
    },
    userType: {
        type: String,
        require: true,
        default: "CLIENT"
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    contacts: {
        address: {
            type: String,
            require: true
        }, 
        phone: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    activeCourses: {
        type: mongoose.Schema.Types.ObjectId, ref: "Course"
    },
    trainer: {
        type: String,
    },
    purchases: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Sale'
    },
    token: {
        type: String,
        default: null
    }
});

const Client = mongoose.model('users', ClientSchema);

module.exports = Client;