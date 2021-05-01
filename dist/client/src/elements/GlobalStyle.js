"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
exports.default = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    body {\n        padding: 0;\n        background-color: ", ";\n        margin: 0;\n        overflow: hidden;\n    }\n"], ["\n    body {\n        padding: 0;\n        background-color: ", ";\n        margin: 0;\n        overflow: hidden;\n    }\n"])), theme_1.theme.colors.mainGrey);
var templateObject_1;
