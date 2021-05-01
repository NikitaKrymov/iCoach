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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom: ", ";\n    margin: 0.2em 0.5em 0.2em 0;\n    display: flex;\n    align-items: center;\n    :hover {\n        cursor: pointer;\n    }\n"], ["\n    border-bottom: ", ";\n    margin: 0.2em 0.5em 0.2em 0;\n    display: flex;\n    align-items: center;\n    :hover {\n        cursor: pointer;\n    }\n"])), function (props) { return props.theme.borderBottom; });
var templateObject_1;