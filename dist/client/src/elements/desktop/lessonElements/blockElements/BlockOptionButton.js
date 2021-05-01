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
var theme_1 = require("../../../../theme");
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    padding: 0.5em 1em 0.5em 1em;\n    border-radius: 0.5em;\n    box-shadow: 0 1px 3px grey;\n    text-align: center;\n    background: ", ";\n    :hover {\n        box-shadow: 0 1px 3px black;\n        cursor: pointer;\n    }\n"], ["\n    color: ", ";\n    padding: 0.5em 1em 0.5em 1em;\n    border-radius: 0.5em;\n    box-shadow: 0 1px 3px grey;\n    text-align: center;\n    background: ", ";\n    :hover {\n        box-shadow: 0 1px 3px black;\n        cursor: pointer;\n    }\n"])), theme_1.theme.colors.white, theme_1.theme.colors.blue);
var templateObject_1;
