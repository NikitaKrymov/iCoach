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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 6em;\n    height: 6em;\n    margin: 0.5em;\n    border-radius: 0.5em;\n    box-shadow: 0 1px 5px grey;\n    background-color: ", ";\n    :hover {\n        box-shadow: 0 1px 8px grey;\n        cursor: pointer;\n    }\n"], ["\n    width: 6em;\n    height: 6em;\n    margin: 0.5em;\n    border-radius: 0.5em;\n    box-shadow: 0 1px 5px grey;\n    background-color: ", ";\n    :hover {\n        box-shadow: 0 1px 8px grey;\n        cursor: pointer;\n    }\n"])), function (props) { return props.theme.backgroundColor; });
var templateObject_1;
