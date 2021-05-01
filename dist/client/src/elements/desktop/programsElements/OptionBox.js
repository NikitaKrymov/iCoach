"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    width: 1.5em;\n    height: 1.5em;\n    background-color: grey;\n    color: white;\n    border-radius: 2em;\n    margin: 0.5em;\n    box-shadow: 0 1px 3px black;\n    transition: 0.5s;\n    :hover{\n        cursor: pointer;\n        background-color: ", ";\n        box-shadow: 0 2px 5px black;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    width: 1.5em;\n    height: 1.5em;\n    background-color: grey;\n    color: white;\n    border-radius: 2em;\n    margin: 0.5em;\n    box-shadow: 0 1px 3px black;\n    transition: 0.5s;\n    :hover{\n        cursor: pointer;\n        background-color: ", ";\n        box-shadow: 0 2px 5px black;\n    }\n"])), theme_1.theme.colors.blue);
var templateObject_1;
