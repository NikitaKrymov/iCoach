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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100vh;\n    background-color: ", ";\n    width: 12em;\n    display: flex;\n    flex-direction: column;\n    z-index: 10;\n"], ["\n    height: 100vh;\n    background-color: ", ";\n    width: 12em;\n    display: flex;\n    flex-direction: column;\n    z-index: 10;\n"])), theme_1.theme.colors.mainBlue);
var templateObject_1;
