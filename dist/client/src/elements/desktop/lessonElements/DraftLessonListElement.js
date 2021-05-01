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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 1fr 20fr 1fr;\n    align-items: center;\n    justify-content: center;\n    height: 3em;\n    position: relative;\n    margin: 0.5em;\n    border-radius: 0.5em;\n    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: ", ";\n    box-shadow: 0 1px 5px grey;\n    :hover {\n        box-shadow: 0 0 8px black;\n        cursor: pointer;\n    }\n"], ["\n    display: grid;\n    grid-template-columns: 1fr 20fr 1fr;\n    align-items: center;\n    justify-content: center;\n    height: 3em;\n    position: relative;\n    margin: 0.5em;\n    border-radius: 0.5em;\n    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: ", ";\n    box-shadow: 0 1px 5px grey;\n    :hover {\n        box-shadow: 0 0 8px black;\n        cursor: pointer;\n    }\n"])), theme_1.theme.colors.secondary);
var templateObject_1;
