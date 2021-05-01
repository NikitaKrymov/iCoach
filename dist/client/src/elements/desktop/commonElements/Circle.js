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
exports.default = styled_components_1.default.circle.attrs({
    r: '3em',
    stroke: 'black',
    strokeWidth: '10px',
    fill: 'transparent',
    cx: "5em",
    cy: "5em"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 2em;\n    transition: 0.5s;\n    transform: rotate(-90deg);\n"], ["\n    color: ", ";\n    font-size: 2em;\n    transition: 0.5s;\n    transform: rotate(-90deg);\n"])), theme_1.theme.colors.primary);
var templateObject_1;
