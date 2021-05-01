"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var GridBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/GridBox"));
var Icon_1 = __importDefault(require("../../../../elements/desktop/commonElements/Icon"));
var CourseContainer_1 = __importDefault(require("../../../../elements/desktop/programsElements/CourseContainer"));
var LeftCourseDashboard_1 = __importDefault(require("../../../../elements/desktop/programsElements/LeftCourseDashboard"));
var OptionBox_1 = __importDefault(require("../../../../elements/desktop/programsElements/OptionBox"));
var RightCourseDashboard_1 = __importDefault(require("../../../../elements/desktop/programsElements/RightCourseDashboard"));
var SettingsContainer_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/SettingsContainer"));
var SettingsIcon_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/SettingsIcon"));
var theme_1 = require("../../../../theme");
var DraftLessonList_1 = __importDefault(require("../lesson/DraftLessonList"));
var LessonList_1 = __importDefault(require("../lesson/LessonList"));
var history_1 = __importDefault(require("../../../../history"));
var OptionDeleteBox_1 = __importDefault(require("../../../../elements/desktop/programsElements/OptionDeleteBox"));
var react_redux_1 = require("react-redux");
var TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb,
    alignItems: theme_1.theme.alignItems.flexStart
};
var BACK_ARROW_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    margin: '0.5em'
};
var TITLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.flexStart,
    fontSize: '2em'
};
var BOTTOM_GRIDBOX_THEME = {
    gridTemplateColumns: '1fr 1fr'
};
var OPTIONS_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb,
    alignItems: theme_1.theme.alignItems.flexStart,
};
var DRAFT_LESSONS_OPTIONS_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb,
    alignItems: theme_1.theme.alignItems.center,
    padding: '0.5em'
};
var DRAFT_LESSONS_TITLE_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    fontSize: '1.6em'
};
var Program = function (props) {
    var _a = react_1.useState(false), isEditMode = _a[0], setEditMode = _a[1];
    console.log(props);
    return (<CourseContainer_1.default>
            <FlexBox_1.default theme={TOP_FLEXBOX_THEME}>
                <FlexBox_1.default theme={BACK_ARROW_THEME} onClick={function () { return history_1.default.goBack(); }}>
                    <Icon_1.default style={{ fontSize: '1.5em ' }}>
                        <i className="fas fa-chevron-left"></i>
                    </Icon_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default theme={TITLE_THEME}>
                    {props.course.title}
                </FlexBox_1.default>
                <SettingsContainer_1.default>
                    <SettingsIcon_1.default onClick={function () { return history_1.default.push("/programs/" + props.course.id + "/settings"); }}>
                        <i className="fas fa-cog"></i>
                    </SettingsIcon_1.default>
                </SettingsContainer_1.default>
            </FlexBox_1.default>
            <GridBox_1.default theme={BOTTOM_GRIDBOX_THEME}>
                <LeftCourseDashboard_1.default>
                    <FlexBox_1.default theme={OPTIONS_FLEXBOX_THEME}>
                        <FlexBox_1.default>
                            <OptionBox_1.default>
                                <i className="fas fa-plus" title="Add new lesson"/>
                            </OptionBox_1.default>
                            <OptionBox_1.default>
                                <i className="fas fa-user-plus" title="Assign new user"/>
                            </OptionBox_1.default>
                            <OptionBox_1.default style={{ backgroundColor: isEditMode ? theme_1.theme.colors.blue : '' }} onClick={function () { return setEditMode(!isEditMode); }}>
                                <i className="far fa-edit" title="Edit course"/>
                            </OptionBox_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            <OptionDeleteBox_1.default>
                                <i className="fas fa-trash-alt"></i>
                            </OptionDeleteBox_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <LessonList_1.default lessons={props.course.lessons} isEditMode={isEditMode} courseId={props.course.id}/>
                </LeftCourseDashboard_1.default>
                <RightCourseDashboard_1.default>
                    <FlexBox_1.default theme={DRAFT_LESSONS_OPTIONS_FLEXBOX_THEME} style={{ borderBottom: '1px solid grey' }}>
                        <FlexBox_1.default theme={DRAFT_LESSONS_TITLE_FLEXBOX_THEME} style={{ height: '1.5em' }}>
                            Draft Lessons
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={DRAFT_LESSONS_TITLE_FLEXBOX_THEME}>
                            All drafts
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <DraftLessonList_1.default isEditMode={isEditMode}/>
                </RightCourseDashboard_1.default>
            </GridBox_1.default>
        </CourseContainer_1.default>);
};
var mapStateToProps = function (state, ownProps) { return ({
    course: state.app.courses.filter(function (course) { if (course.id === ownProps.match.params.id) {
        return course;
    } })[0]
}); };
exports.default = react_redux_1.connect(mapStateToProps)(Program);
