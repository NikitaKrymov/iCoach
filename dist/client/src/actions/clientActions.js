"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClientDataFail = exports.fetchClientDataSuccess = exports.fetchClientDataRequest = void 0;
var clientActionTypes_1 = require("../types/clientActionTypes");
var fetchClientDataRequest = function () { return ({
    type: clientActionTypes_1.CLIENT_FETCH_DATA_REQUEST
}); };
exports.fetchClientDataRequest = fetchClientDataRequest;
var fetchClientDataSuccess = function (userData) { return ({
    type: clientActionTypes_1.CLIENT_FETCH_DATA_SUCCESS,
    payload: userData
}); };
exports.fetchClientDataSuccess = fetchClientDataSuccess;
var fetchClientDataFail = function () { return ({
    type: clientActionTypes_1.CLIENT_FETCH_DATA_FAIL,
}); };
exports.fetchClientDataFail = fetchClientDataFail;
