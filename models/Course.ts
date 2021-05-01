import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String, 
        require: true
    },
    contentVisibility: {
        type: Number,
    },
    accessToContent: {
        type: Number
    },
    programStart: {
        type: Date
    },
    coursePrice: {
        type: Number
    },
    numberOfPurchases: {
        type: Number,
        default: 0
    },
    totalUsers: {
        type: Number,
        default: 0
    },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Lesson",
        default: []
    }],
    trainer: {
        type: String
    },
    // trainer: {
    //     type: mongoose.Schema.Types.ObjectId, ref: "Trainer"
    // },
    imageURL: {
    }
})

const Course = mongoose.model('Courses', CourseSchema);

module.exports = Course;
