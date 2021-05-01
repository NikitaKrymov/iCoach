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
exports.loadingReducer = void 0;
var trainerActionTypes_1 = require("../types/trainerActionTypes");
var Initial_State = {
    isTrainerClientsLoading: true,
    isTrainerCoursesLoading: true,
    isTrainerSalesLoading: true
};
var loadingReducer = function (state, action) {
    if (state === void 0) { state = Initial_State; }
    switch (action.type) {
        case trainerActionTypes_1.FETCH_TRAINER_CLIENTS_SUCCESS:
            return __assign(__assign({}, state), { isTrainerClientsLoading: false });
        case trainerActionTypes_1.FETCH_TRAINER_CLIENTS_REQUEST:
            return __assign(__assign({}, state), { isTrainerClientsLoading: true });
        case trainerActionTypes_1.FETCH_TRAINER_COURSES_REQUEST:
            return __assign(__assign({}, state), { isTrainerCoursesLoading: true });
        case trainerActionTypes_1.FETCH_TRAINER_COURSES_SUCCESS:
            return __assign(__assign({}, state), { isTrainerCoursesLoading: false });
        case trainerActionTypes_1.FETCH_TRAINER_SALES_REQUEST:
            return __assign(__assign({}, state), { isTrainerSalesLoading: true });
        case trainerActionTypes_1.FETCH_TRAINER_SALES_SUCCESS:
            return __assign(__assign({}, state), { isTrainerSalesLoading: false });
        default:
            return state;
    }
};
exports.loadingReducer = loadingReducer;
