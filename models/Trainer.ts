import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        default: "TRAINER"
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    schoolName: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    contacts: {
        phone: {
            type: String,
            required: true
        },
        address: {
            country: {
                type: String,
                required: true
            },
            state: {
                type: String,
            },
            city: {
                type: String, 
                required: true
            },
            zipCode: {
                type: Number,
                required: true
            }
        },
        email: {
            type: String,
            required: true
        }
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Course"
    }],
    sales: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Sale"
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Client"
    }]
});

const Trainer = mongoose.model('trainers', TrainerSchema);

module.exports = Trainer;