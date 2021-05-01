"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GlobalStyle_1 = __importDefault(require("../../elements/GlobalStyle"));
var MobileAppContainer_1 = __importDefault(require("../../elements/modile/MobileAppContainer"));
var routes_1 = require("../../routes");
var Header_1 = __importDefault(require("../desktop/Header"));
var Footer_1 = __importDefault(require("./Footer"));
var routes = routes_1.createRoutes();
var App = function (props) {
    return (<div>
            <GlobalStyle_1.default />
            <Header_1.default />
            <MobileAppContainer_1.default>
                {routes}
            </MobileAppContainer_1.default>
            <Footer_1.default />
        </div>);
};
exports.default = App;
