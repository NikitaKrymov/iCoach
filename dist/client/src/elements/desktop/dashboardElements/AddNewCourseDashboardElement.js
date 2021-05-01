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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 25em;\n    height: 15em;\n    border-radius: 0.5em;\n    box-shadow: 1px 1px 5px black;\n    padding: 0.5em;\n    margin: 1em;\n    transition: 0.1s;\n    background-color: ", ";\n    :hover {\n        transition: 0.1s;\n        box-shadow: 1px 1px 10px black;\n        cursor: pointer;\n    }\n"], ["\n    width: 25em;\n    height: 15em;\n    border-radius: 0.5em;\n    box-shadow: 1px 1px 5px black;\n    padding: 0.5em;\n    margin: 1em;\n    transition: 0.1s;\n    background-color: ", ";\n    :hover {\n        transition: 0.1s;\n        box-shadow: 1px 1px 10px black;\n        cursor: pointer;\n    }\n"])), theme_1.theme.colors.secondary);
var templateObject_1;
