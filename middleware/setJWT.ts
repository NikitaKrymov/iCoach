const jwt = require('jsonwebtoken');
require('dotenv').config();
const keys = require('../config/keys');

module.exports = (userId: string, userType: string) => {
    const token = jwt.sign({ userId, userType }, keys.ACCESS_TOKEN_SECRET, { expiresIn: '100000' });
    return token;
}