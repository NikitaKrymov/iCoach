"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var DesktopApp_1 = __importDefault(require("./desktop/DesktopApp"));
var MobileApp_1 = __importDefault(require("./mobile/MobileApp"));
var App = function (props) {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1024) {
        return (<MobileApp_1.default authStatus={props.authStatus}/>);
    }
    else {
        console.log(props.authStatus);
        return (<DesktopApp_1.default authStatus={props.authStatus}/>);
    }
};
var mapStateToProps = function (state) { return ({
    authStatus: state.app.authStatus
}); };
exports.default = react_redux_1.connect(mapStateToProps)(App);
