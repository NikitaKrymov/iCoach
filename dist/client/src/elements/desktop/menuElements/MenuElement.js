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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    height: 3em;\n    width: 10em;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 2em;\n    color: ", ";\n    font-family: 'Times New Roman', Times, serif;\n    background-color: ", ";\n    :hover {\n        color: ", ";\n        cursor: pointer;\n    }\n"], ["\n    display: flex;\n    height: 3em;\n    width: 10em;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 2em;\n    color: ", ";\n    font-family: 'Times New Roman', Times, serif;\n    background-color: ", ";\n    :hover {\n        color: ", ";\n        cursor: pointer;\n    }\n"])), theme_1.theme.colors.white, theme_1.theme.colors.mainBlue, theme_1.theme.colors.primary);
var templateObject_1;
