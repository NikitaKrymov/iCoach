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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 3em;\n    width: 100%;\n    padding: 0.5em;\n    border-bottom: 1px solid grey;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: ", ";\n    :hover {\n        cursor: pointer;\n        background-color: ", "\n    }\n"], ["\n    height: 3em;\n    width: 100%;\n    padding: 0.5em;\n    border-bottom: 1px solid grey;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: ", ";\n    :hover {\n        cursor: pointer;\n        background-color: ", "\n    }\n"])), theme_1.theme.colors.white, theme_1.theme.colors.lightGrey);
var templateObject_1;
