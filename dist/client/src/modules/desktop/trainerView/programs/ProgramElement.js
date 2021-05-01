"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProgramElementTitle_1 = __importDefault(require("../../../../elements/desktop/programsElements/ProgramElementTitle"));
var SettingsContainer_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/SettingsContainer"));
var SettingsIcon_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/SettingsIcon"));
var ProgramElement_1 = __importDefault(require("../../../../elements/desktop/programsElements/ProgramElement"));
var history_1 = __importDefault(require("../../../../history"));
var Text_1 = __importDefault(require("../../../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../../../theme");
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var goToSettings = function (e, course) {
    e.preventDefault();
    e.stopPropagation();
    history_1.default.push("/programs/" + course.id + "/settings");
};
var TITLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    fontSize: '1.5em',
    color: theme_1.theme.colors.white
};
var Element = function (props) {
    console.log(props.course);
    return (<ProgramElement_1.default onClick={function () { return history_1.default.push("/programs/" + props.course.id); }}>
            <SettingsContainer_1.default>
                <FlexBox_1.default style={{ backgroundColor: 'rgb(255, 255, 255, 1)', height: '2em', width: '2em', justifyContent: 'center', alignItems: 'center', borderRadius: '0 0.2em 0 0.2em' }}>
                    <SettingsIcon_1.default onClick={function (e) { return e.target === e.currentTarget ? null : goToSettings(e, props.course); }}>
                        <i className="fas fa-cog"></i>
                    </SettingsIcon_1.default>
                </FlexBox_1.default>  
            </SettingsContainer_1.default>
            <ProgramElementTitle_1.default>
                <Text_1.default theme={TITLE_THEME}>
                    {props.course.title}
                </Text_1.default>
            </ProgramElementTitle_1.default>
        </ProgramElement_1.default>);
};
exports.default = Element;
