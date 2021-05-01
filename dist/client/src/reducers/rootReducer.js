"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var appReducer_1 = require("./appReducer");
var loadingReducer_1 = require("./loadingReducer");
exports.rootReducer = redux_1.combineReducers({
    app: appReducer_1.appReducer,
    isLoading: loadingReducer_1.loadingReducer
});
