"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var theme_1 = require("../../../../../theme");
var Text_1 = __importDefault(require("../../../../../elements/desktop/commonElements/Text"));
var CircleContainer_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/UsersBlock/CircleContainer"));
var CIRCLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    flexDirection: theme_1.theme.flexDirection.column
};
var CIRCLE_TITLE_THEME = {
    color: theme_1.theme.colors.default,
    fontSize: '2em',
    margin: '0 1em 0 1em',
};
var INSIDE_CIRCLE_TEXT_THEME = {
    color: theme_1.theme.colors.default,
    fontSize: '2.5em',
    justifyContent: theme_1.theme.justifyContent.center
};
var CircleData = function (props) {
    var circleRadius = 4;
    var circleLength = 3.141592653589793 * 4 * 2;
    var progress = circleLength * (1 - props.percentage / 100);
    return (<FlexBox_1.default theme={CIRCLE_THEME}>
            <Text_1.default theme={CIRCLE_TITLE_THEME}>
                {props.title} TEST
            </Text_1.default>
            <Text_1.default style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'absolute', marginTop: '2.3em' }}><FlexBox_1.default theme={INSIDE_CIRCLE_TEXT_THEME}>{props.label}</FlexBox_1.default> </Text_1.default>
            <CircleContainer_1.default>
                <circle r={circleRadius + "em"} stroke={theme_1.theme.colors.lightGrey} stroke-width="8px" fill="transparent" cx="5em" cy="5em" strokeDasharray={circleLength + "em"} strokeDashoffset='0'/>
                <circle r={circleRadius + "em"} stroke={props.circleColor} stroke-width="8px" fill="transparent" cx="5em" cy="5em" strokeDasharray={circleLength + "em"} strokeDashoffset={progress + "em"}/>
                {/* <text transform="rotate(-90deg)" x="5em" y="5em" text-anchor="middle" stroke={theme.colors.primary} stroke-width="1px" dy=".3em">25</text> */}
            </CircleContainer_1.default>
        </FlexBox_1.default>);
};
exports.default = CircleData;
