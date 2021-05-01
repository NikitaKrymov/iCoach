"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PrimaryButton_1 = __importDefault(require("../../../../../elements/desktop/commonElements/PrimaryButton"));
var ProfileCardContentContainer_1 = __importDefault(require("../../../../../elements/desktop/usersElements/ProfileCardContentContainer"));
var UserProfileProgramsElement_1 = __importDefault(require("../../../../../elements/desktop/usersElements/UserProfileProgramsElement"));
var theme_1 = require("../../../../../theme");
var CONTENT_ELEMENT = {
    margin: '0.5em'
};
var ASSIGN_NEW_COURSE_BUTTON = {
    color: theme_1.theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme_1.theme.colors.white,
    hoverColor: 'green'
};
var renderClientCourses = function (userCard) {
    return userCard.activeCourses.map(function (course) {
        return (<UserProfileProgramsElement_1.default>
             {course.title}
            </UserProfileProgramsElement_1.default>);
    });
};
var ProgramsContent = function (props) {
    if (!props.userCard.id) {
        return (<div style={{ color: theme_1.theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>);
    }
    else {
        return (<ProfileCardContentContainer_1.default style={{ width: '100%' }}>
                {renderClientCourses(props.userCard)}
                <PrimaryButton_1.default theme={ASSIGN_NEW_COURSE_BUTTON}>
                    Assign New Course
                </PrimaryButton_1.default>
            </ProfileCardContentContainer_1.default>);
    }
};
exports.default = ProgramsContent;
