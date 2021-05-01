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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    justify-content: ", ";\n    display: flex;\n    align-items: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 1px 3px black;\n    padding: 0.5em 1em 0.5em 1em;\n    margin: 1em;\n    border-radius: 0.5em;\n    box-sizing: border-box;\n    :hover{\n        background-color: ", ";\n        color: ", ";\n        cursor: pointer;\n    }\n"], ["\n    width: ", ";\n    height: ", ";\n    justify-content: ", ";\n    display: flex;\n    align-items: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 1px 3px black;\n    padding: 0.5em 1em 0.5em 1em;\n    margin: 1em;\n    border-radius: 0.5em;\n    box-sizing: border-box;\n    :hover{\n        background-color: ", ";\n        color: ", ";\n        cursor: pointer;\n    }\n"])), function (props) { return props.theme.width; }, function (props) { return props.theme.height; }, function (props) { return props.theme.justifyContent; }, function (props) { return props.theme.alignItems; }, theme_1.theme.colors.primary, function (props) { return props.theme.color; }, theme_1.theme.colors.mainBlue, theme_1.theme.colors.white);
var templateObject_1;
