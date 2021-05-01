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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    padding: 0.5em;\n    height: 3em;\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n    color: ", ";\n    justify-content: space-between;\n    :hover {\n        cursor: pointer;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    padding: 0.5em;\n    height: 3em;\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n    color: ", ";\n    justify-content: space-between;\n    :hover {\n        cursor: pointer;\n    }\n"])), theme_1.theme.colors.mainGrey, function (props) { return props.theme.backgroundColor; }, function (props) { return props.theme.color; });
var templateObject_1;
