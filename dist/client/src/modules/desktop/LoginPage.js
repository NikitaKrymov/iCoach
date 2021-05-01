"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var authActions_1 = require("../../actions/authActions");
var LoginPage = function (props) {
    return (<div>
            Login to access the account
            <button onClick={function () { return props.authenticateUser("Nik"); }}>
                Auth
            </button>
        </div>);
};
var mapDispatchToProps = function (dispatch) { return ({
    authenticateUser: function (credentials) { return dispatch(authActions_1.authenticateUser(credentials)); }
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(LoginPage);
