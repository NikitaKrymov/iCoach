"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appReducer = void 0;
var authActionInterfaces_1 = require("../types/authActionInterfaces");
var clientActionTypes_1 = require("../types/clientActionTypes");
var trainerActionTypes_1 = require("../types/trainerActionTypes");
var Initial_State = {
    authStatus: false,
};
var appReducer = function (state, action) {
    if (state === void 0) { state = Initial_State; }
    switch (action.type) {
        case authActionInterfaces_1.AUTH_TRAINER_SUCCESS:
            return __assign(__assign({}, state), { authStatus: true, userType: "TRAINER", userData: { id: 'TrainerID' } });
        case authActionInterfaces_1.AUTH_CLIENT_SUCCESS:
            return __assign(__assign({}, state), { authStatus: true, userType: "CLIENT", userData: { id: 'ClientID' } });
        case trainerActionTypes_1.TRAINER_FETCH_DATA_SUCCESS:
            return __assign(__assign({}, state), { userData: action.payload });
        case clientActionTypes_1.CLIENT_FETCH_DATA_SUCCESS:
            return __assign(__assign({}, state), { userData: action.payload });
        case trainerActionTypes_1.FETCH_TRAINER_CLIENTS_SUCCESS:
            return __assign(__assign({}, state), { clients: action.payload });
        case trainerActionTypes_1.FETCH_TRAINER_COURSES_SUCCESS:
            return __assign(__assign({}, state), { courses: action.payload });
        case trainerActionTypes_1.FETCH_TRAINER_SALES_SUCCESS:
            return __assign(__assign({}, state), { sales: action.payload });
        default:
            return state;
    }
};
exports.appReducer = appReducer;
