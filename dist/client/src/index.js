"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var App_1 = __importDefault(require("./modules/App"));
var store_1 = __importDefault(require("./reducers/store"));
react_dom_1.default.render(<react_redux_1.Provider store={store_1.default}>
        <App_1.default />
    </react_redux_1.Provider>, document.querySelector('#root'));
