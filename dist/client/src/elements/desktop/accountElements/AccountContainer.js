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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    align-items: flex-start;\n    margin: 2em;\n    background-color: ", ";\n    box-shadow: 0 3px 5px grey;\n    border-radius: 0.2em;\n    padding-right: 2em;\n"], ["\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    align-items: flex-start;\n    margin: 2em;\n    background-color: ", ";\n    box-shadow: 0 3px 5px grey;\n    border-radius: 0.2em;\n    padding-right: 2em;\n"])), theme_1.theme.colors.mainLightGrey);
var templateObject_1;
