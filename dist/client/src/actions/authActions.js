"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateTrainerSuccess = exports.authenticateClientSuccess = exports.authenticateUser = void 0;
var authActionInterfaces_1 = require("../types/authActionInterfaces");
var authenticateUser = function (credentials) { return ({
    type: authActionInterfaces_1.AUTH_REQUEST,
    payload: credentials
}); };
exports.authenticateUser = authenticateUser;
var authenticateClientSuccess = function (userData) { return ({
    type: authActionInterfaces_1.AUTH_CLIENT_SUCCESS,
    payload: userData,
}); };
exports.authenticateClientSuccess = authenticateClientSuccess;
var authenticateTrainerSuccess = function (userData) { return ({
    type: authActionInterfaces_1.AUTH_TRAINER_SUCCESS,
    payload: userData,
}); };
exports.authenticateTrainerSuccess = authenticateTrainerSuccess;
