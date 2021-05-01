"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTrainerSalesFail = exports.fetchTrainerSalesSuccess = exports.fetchTrainerSalesRequest = exports.fetchTrainerCoursesFail = exports.fetchTrainerCoursesSuccess = exports.fetchTrainerCoursesRequest = exports.fetchTrainerClientsFail = exports.fetchTrainerClientsSuccess = exports.fetchTrainerClientsRequest = exports.fetchTrainerDataFail = exports.fetchTrainerDataSuccess = exports.fetchTrainerDataRequest = void 0;
var trainerActionTypes_1 = require("../types/trainerActionTypes");
var fetchTrainerDataRequest = function () { return ({
    type: trainerActionTypes_1.TRAINER_FETCH_DATA_REQUEST
}); };
exports.fetchTrainerDataRequest = fetchTrainerDataRequest;
var fetchTrainerDataSuccess = function (userData) { return ({
    type: trainerActionTypes_1.TRAINER_FETCH_DATA_SUCCESS,
    payload: userData
}); };
exports.fetchTrainerDataSuccess = fetchTrainerDataSuccess;
var fetchTrainerDataFail = function () { return ({
    type: trainerActionTypes_1.TRAINER_FETCH_DATA_FAIL,
}); };
exports.fetchTrainerDataFail = fetchTrainerDataFail;
var fetchTrainerClientsRequest = function (trainerId) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_CLIENTS_REQUEST,
    payload: trainerId
}); };
exports.fetchTrainerClientsRequest = fetchTrainerClientsRequest;
var fetchTrainerClientsSuccess = function (clients) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_CLIENTS_SUCCESS,
    payload: clients
}); };
exports.fetchTrainerClientsSuccess = fetchTrainerClientsSuccess;
var fetchTrainerClientsFail = function () { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_CLIENTS_FAIL
}); };
exports.fetchTrainerClientsFail = fetchTrainerClientsFail;
var fetchTrainerCoursesRequest = function (trainerId) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_COURSES_REQUEST,
    payload: trainerId
}); };
exports.fetchTrainerCoursesRequest = fetchTrainerCoursesRequest;
var fetchTrainerCoursesSuccess = function (courses) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_COURSES_SUCCESS,
    payload: courses
}); };
exports.fetchTrainerCoursesSuccess = fetchTrainerCoursesSuccess;
var fetchTrainerCoursesFail = function () { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_COURSES_FAIL
}); };
exports.fetchTrainerCoursesFail = fetchTrainerCoursesFail;
var fetchTrainerSalesRequest = function (trainerId) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_SALES_REQUEST,
    payload: trainerId
}); };
exports.fetchTrainerSalesRequest = fetchTrainerSalesRequest;
var fetchTrainerSalesSuccess = function (sales) { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_SALES_SUCCESS,
    payload: sales
}); };
exports.fetchTrainerSalesSuccess = fetchTrainerSalesSuccess;
var fetchTrainerSalesFail = function () { return ({
    type: trainerActionTypes_1.FETCH_TRAINER_SALES_FAIL
}); };
exports.fetchTrainerSalesFail = fetchTrainerSalesFail;
