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
exports.default = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: none;\n    border: none;\n    width: 30em;\n    height: 2em;\n    border-radius: 0.5em;\n    padding: 0.5em;\n    margin: 0.5em;\n    border: 1px solid grey;\n    :focus{\n        border: 1px solid ", ";\n    }\n"], ["\n    outline: none;\n    border: none;\n    width: 30em;\n    height: 2em;\n    border-radius: 0.5em;\n    padding: 0.5em;\n    margin: 0.5em;\n    border: 1px solid grey;\n    :focus{\n        border: 1px solid ", ";\n    }\n"])), theme_1.theme.colors.primary);
var templateObject_1;
