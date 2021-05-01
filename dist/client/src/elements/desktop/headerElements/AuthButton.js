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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: white;\n    border-radius: 0.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    transition: 0.2s;\n    padding: 0.5em;\n    margin-right: 1em;\n    :hover{\n        cursor: pointer;\n        background: transparent;\n        color: ", ";\n        background-color: ", ";\n    }\n"], ["\n    color: white;\n    border-radius: 0.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    transition: 0.2s;\n    padding: 0.5em;\n    margin-right: 1em;\n    :hover{\n        cursor: pointer;\n        background: transparent;\n        color: ", ";\n        background-color: ", ";\n    }\n"])), theme_1.theme.colors.white, theme_1.theme.colors.secondary);
var templateObject_1;
