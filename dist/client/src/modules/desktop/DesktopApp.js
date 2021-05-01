"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ContentContainer_1 = __importDefault(require("../../elements/desktop/ContentContainer"));
var GlobalStyle_1 = __importDefault(require("../../elements/GlobalStyle"));
var routes_1 = require("../../routes");
var Header_1 = __importDefault(require("./Header"));
var LoginPage_1 = __importDefault(require("./LoginPage"));
var App = function (props) {
    if (props.authStatus) {
        var routes = routes_1.createRoutes();
        return (<div style={{ display: 'flex' }}>
                <GlobalStyle_1.default />
                <Header_1.default />
                <ContentContainer_1.default>
                    {routes}
                </ContentContainer_1.default>
            </div>);
    }
    else {
        return (<div>
                <GlobalStyle_1.default />
                <ContentContainer_1.default>
                    <LoginPage_1.default />
                </ContentContainer_1.default>
            </div>);
    }
};
exports.default = App;
