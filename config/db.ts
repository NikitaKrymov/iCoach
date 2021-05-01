import mongoose from 'mongoose';
const keys = require('./keys');

module.exports = async () => {
    try {
        const client = await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongo DB has been connected");
        return client;
    } catch (e) {
        console.log(e);
    }
}