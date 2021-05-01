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
exports.default = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid grey;\n    padding: 1em;\n    text-decoration: none;\n    min-height: 5em;\n    :focus{\n        border: 1px solid green;\n    }\n"], ["\n    border: 1px solid grey;\n    padding: 1em;\n    text-decoration: none;\n    min-height: 5em;\n    :focus{\n        border: 1px solid green;\n    }\n"])));
var templateObject_1;
