"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var GridBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/GridBox"));
var PrimaryButton_1 = __importDefault(require("../../../../elements/desktop/commonElements/PrimaryButton"));
var SettingsBlock_1 = __importDefault(require("../../../../elements/desktop/settingsElements/SettingsBlock"));
var SettingsBlockTitle_1 = __importDefault(require("../../../../elements/desktop/settingsElements/SettingsBlockTitle"));
var SettingsContainer_1 = __importDefault(require("../../../../elements/desktop/settingsElements/SettingsContainer"));
var SettingsInput_1 = __importDefault(require("../../../../elements/desktop/settingsElements/SettingsInput"));
var theme_1 = require("../../../../theme");
require("../../../../css/main.css");
var react_redux_1 = require("react-redux");
var SETTINGS_CONTAINER_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexEnd,
    alignItems: theme_1.theme.alignItems.center,
    flexDirection: theme_1.theme.flexDirection.column
};
var DETAILS_BLOCK_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    flexDirection: theme_1.theme.flexDirection.column,
    margin: '1em'
};
var CENTER_THEME = {
    alignItems: theme_1.theme.alignItems.center,
    justifyContent: theme_1.theme.justifyContent.center
};
var SAVE_BUTTON_THEME = {
    color: theme_1.theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme_1.theme.colors.white,
    hoverColor: 'green'
};
var COURSE_SETTINGS_BLOCK_THEME = {
    gridTemplateColumns: '1fr 1fr'
};
var COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexEnd,
    margin: '1em'
};
var COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    margin: '1em',
    flexDirection: theme_1.theme.flexDirection.column
};
var CourseSetting = function (props) {
    return (<SettingsContainer_1.default className="hideScrollbar">
            <FlexBox_1.default theme={SETTINGS_CONTAINER_THEME}>
                <SettingsBlock_1.default>
                    <SettingsBlockTitle_1.default>
                        <div style={{ fontSize: '1.5em' }}>
                            Course Details
                        </div>
                    </SettingsBlockTitle_1.default>
                    <FlexBox_1.default theme={DETAILS_BLOCK_THEME}>
                        <FlexBox_1.default>
                            <SettingsInput_1.default placeholder="Course Name" value={props.course.title}/>
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            <SettingsInput_1.default placeholder="Course Description" style={{ height: '6em' }}/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={CENTER_THEME}>
                        <PrimaryButton_1.default theme={SAVE_BUTTON_THEME}>
                            Save
                        </PrimaryButton_1.default>
                    </FlexBox_1.default>
                </SettingsBlock_1.default>
                <SettingsBlock_1.default>
                    <SettingsBlockTitle_1.default>
                        <div style={{ fontSize: '1.5em' }}>
                            Course Settings
                        </div>
                    </SettingsBlockTitle_1.default>
                    <FlexBox_1.default theme={DETAILS_BLOCK_THEME} style={{ flexDirection: 'column' }}>
                        <GridBox_1.default theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Content visibility:
                            </FlexBox_1.default>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox_1.default>
                                    <input type="radio" id='first' name="contentVisibility"/><label htmlFor="first">Only current lesson is visible</label>
                                </FlexBox_1.default>
                                <FlexBox_1.default>
                                    <input type="radio" id='second' name="contentVisibility"/><label htmlFor="second">Current and previous lessons are visible</label>
                                </FlexBox_1.default>
                                <FlexBox_1.default>
                                    <input type="radio" id='third' name="contentVisibility"/><label htmlFor="third">Keep all lessons visible</label>
                                </FlexBox_1.default>
                            </FlexBox_1.default>
                        </GridBox_1.default>
                        <GridBox_1.default theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Access to a course content:
                            </FlexBox_1.default>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox_1.default>
                                    <input type="radio" id='first' name="accessToCourse"/><label htmlFor="first">After the previos one is completed</label>
                                </FlexBox_1.default>
                                <FlexBox_1.default>
                                    <input type="radio" id='second' name="accessToCourse"/><label htmlFor="second">Every day</label>
                                </FlexBox_1.default>
                            </FlexBox_1.default>
                        </GridBox_1.default>
                        <GridBox_1.default theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Program start:
                            </FlexBox_1.default>
                            <FlexBox_1.default theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox_1.default>
                                    <input type="radio" id='first' name="programStart"/><label htmlFor="first">After purchase</label>
                                </FlexBox_1.default>
                                <FlexBox_1.default>
                                    <input type="radio" id='second' name="programStart"/><label htmlFor="second">On</label>
                                </FlexBox_1.default>
                            </FlexBox_1.default>
                        </GridBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={CENTER_THEME}>
                        <PrimaryButton_1.default theme={SAVE_BUTTON_THEME}>
                            Save
                        </PrimaryButton_1.default>
                    </FlexBox_1.default>
                </SettingsBlock_1.default>
                <SettingsBlock_1.default>
                    <SettingsBlockTitle_1.default>
                        <div style={{ fontSize: '1.5em' }}>
                            Pricing Plan
                        </div>
                    </SettingsBlockTitle_1.default>
                    <FlexBox_1.default theme={DETAILS_BLOCK_THEME} style={{ width: '50em' }}>
                        <FlexBox_1.default>
                            <SettingsInput_1.default placeholder="Course Name"/>
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            <SettingsInput_1.default placeholder="Course Description"/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={CENTER_THEME}>
                        <PrimaryButton_1.default theme={SAVE_BUTTON_THEME}>
                            Save
                        </PrimaryButton_1.default>
                    </FlexBox_1.default>
                </SettingsBlock_1.default>
            </FlexBox_1.default>
        </SettingsContainer_1.default>);
};
var mapStateToProps = function (state, ownProps) { return ({
    course: state.app.courses.filter(function (course) { if (course.id === ownProps.match.params.id) {
        return course;
    } })[0]
}); };
exports.default = react_redux_1.connect(mapStateToProps)(CourseSetting);
