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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    color: ", ";\n    justify-content: flex-end;\n    align-items: center;\n    font-size: 1.5em;\n    font-style: italic;\n"], ["\n    display: flex;\n    color: ", ";\n    justify-content: flex-end;\n    align-items: center;\n    font-size: 1.5em;\n    font-style: italic;\n"])), theme_1.theme.colors.primary);
var templateObject_1;
