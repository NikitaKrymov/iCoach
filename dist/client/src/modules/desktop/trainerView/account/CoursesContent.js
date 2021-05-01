"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CourseLessonsContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/CourseLessonsContainer"));
var CoursesContentContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/CoursesContentContainer"));
var CoursesListElement_1 = __importDefault(require("../../../../elements/desktop/accountElements/CoursesListElement"));
require("../../../../css/main.css");
var CoursesListContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/CoursesListContainer"));
var theme_1 = require("../../../../theme");
var Text_1 = __importDefault(require("../../../../elements/desktop/commonElements/Text"));
var LessonListElement_1 = __importDefault(require("../../../../elements/desktop/accountElements/LessonListElement"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var CourseElementImg_1 = __importDefault(require("../../../../elements/desktop/usersElements/CourseElementImg"));
var COURSES = [
    {
        id: 0,
        title: 'Course 1',
        lessons: [
            {
                id: 0,
                title: 'Course 1 Lesson 1'
            },
            {
                id: 1,
                title: 'Course 1 Lesson 2'
            },
            {
                id: 2,
                title: 'Course 1 Lesson 3'
            },
            {
                id: 3,
                title: 'Course 1 Lesson 4'
            },
            {
                id: 4,
                title: 'Course 1 Lesson 5'
            },
        ]
    },
    {
        id: 1,
        title: 'Course 2',
        lessons: [
            {
                id: 0,
                title: 'Course 2 Lesson 1'
            },
            {
                id: 1,
                title: 'Course 2 Lesson 2'
            },
            {
                id: 2,
                title: 'Course 2 Lesson 3'
            },
            {
                id: 3,
                title: 'Course 2 Lesson 4'
            },
        ]
    },
    {
        id: 2,
        title: 'Course 3',
        lessons: [
            {
                id: 0,
                title: 'Course 3 Lesson 1'
            },
            {
                id: 1,
                title: 'Course 3 Lesson 2'
            },
            {
                id: 2,
                title: 'Course 3 Lesson 3'
            },
            {
                id: 3,
                title: 'Course 3 Lesson 4'
            },
        ]
    },
    {
        id: 3,
        title: 'Course 4',
        lessons: [
            {
                id: 0,
                title: 'Course 4 Lesson 1'
            },
            {
                id: 1,
                title: 'Course 4 Lesson 2'
            },
            {
                id: 2,
                title: 'Course 4 Lesson 3'
            },
        ]
    },
    {
        id: 4,
        title: 'Course 5',
        lessons: [
            {
                id: 0,
                title: 'Course 5 Lesson 1'
            },
            {
                id: 1,
                title: 'Course 5 Lesson 2'
            },
            {
                id: 2,
                title: 'Course 5 Lesson 3'
            },
            {
                id: 3,
                title: 'Course 5 Lesson 4'
            },
        ]
    },
];
var TITLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center
};
var COURSE_TITLE_THEME = {
    alignItems: theme_1.theme.alignItems.center,
    justifyContent: theme_1.theme.justifyContent.center,
    flexDirection: theme_1.theme.flexDirection.column
};
var getStyle = function (courseId, selectedCourseId) {
    return {
        background: courseId === selectedCourseId ? theme_1.theme.colors.lightGrey : theme_1.theme.colors.white,
        //background: courseId === selectedCourseId ? '#90c9ff' : 'white',
        borderBottom: '1px solid lightgrey',
        borderRight: courseId === selectedCourseId ? 'none' : '1px solid lightgrey'
    };
};
var CoursesContent = function (props) {
    var _a = react_1.default.useState(0), selectedCourse = _a[0], setSelectedCourse = _a[1];
    var renderCourseList = function () {
        return COURSES.map(function (course, i) {
            return (<CoursesListElement_1.default key={i} style={getStyle(course.id, selectedCourse)} onClick={function () { return setSelectedCourse(course.id); }}>
                    <CourseElementImg_1.default>            
                        {course.title}
                    </CourseElementImg_1.default>
                    <FlexBox_1.default theme={COURSE_TITLE_THEME}>
                        <FlexBox_1.default>
                            {course.title}
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            Course Description
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                </CoursesListElement_1.default>);
        });
    };
    var renderLessonList = function () {
        return COURSES[selectedCourse].lessons.map(function (lesson, i) {
            return (<LessonListElement_1.default key={i}>
                    {lesson.title}
                </LessonListElement_1.default>);
        });
    };
    return (<CoursesContentContainer_1.default>
            <CoursesListContainer_1.default>
                <Text_1.default theme={TITLE_THEME} style={{ height: '2em', background: theme_1.theme.colors.mainBlue, color: 'white', borderRadius: '0.2em 0 0 0', fontSize: '1.2em' }}>
                    My Courses
                </Text_1.default>
                <div className="hideScrollbar" style={{ margin: '0.5em 0 0.5em 0.5em', overflow: 'scroll', flexDirection: 'column', position: 'relative', height: '35em' }}>
                    {renderCourseList()}
                </div>
            </CoursesListContainer_1.default>
            <CourseLessonsContainer_1.default className="hideScrollbar">
                <Text_1.default theme={TITLE_THEME} style={{ height: '2em', background: theme_1.theme.colors.mainBlue, color: 'white', borderLeft: '1px solid white', borderRadius: '0 0.2em 0 0', fontSize: '1.2em' }}>
                    Course Lessons
                </Text_1.default>
                {renderLessonList()}
            </CourseLessonsContainer_1.default>
        </CoursesContentContainer_1.default>);
};
exports.default = CoursesContent;
