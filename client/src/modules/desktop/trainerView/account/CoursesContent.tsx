import React from 'react';
import CourseLessonsContainer from '../../../../elements/desktop/accountElements/CourseLessonsContainer';
import CoursesContentContainer from '../../../../elements/desktop/accountElements/CoursesContentContainer';
import CoursesContentElement from '../../../../elements/desktop/accountElements/CoursesListElement';
import '../../../../css/main.css';
import CoursesListContainer from '../../../../elements/desktop/accountElements/CoursesListContainer';
import { theme } from '../../../../theme';
import Select from '../../../../elements/desktop/lessonElements/blockElements/Select';
import Text from '../../../../elements/desktop/commonElements/Text';
import LessonListElement from '../../../../elements/desktop/accountElements/LessonListElement';
import { countReset } from 'console';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import CourseElementImg from '../../../../elements/desktop/usersElements/CourseElementImg';

const COURSES = [
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

const TITLE_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const COURSE_TITLE_THEME = {
    alignItems: theme.alignItems.center,
    justifyContent: theme.justifyContent.center,
    flexDirection: theme.flexDirection.column
}


const getStyle = (courseId: number, selectedCourseId: number) => {
    return {
        background: courseId === selectedCourseId ? theme.colors.lightGrey : theme.colors.white,
        //background: courseId === selectedCourseId ? '#90c9ff' : 'white',
        borderBottom: '1px solid lightgrey',
        borderRight: courseId === selectedCourseId ? 'none' : '1px solid lightgrey'
    }
}

const CoursesContent: React.FC = (props) => {
    const [selectedCourse, setSelectedCourse] = React.useState(0);



    const renderCourseList = () => {
        return COURSES.map((course,i) => {
            return(
                <CoursesContentElement key={i} style={getStyle(course.id, selectedCourse)} onClick={() => setSelectedCourse(course.id)}>
                    <CourseElementImg>            
                        {course.title}
                    </CourseElementImg>
                    <FlexBox theme={COURSE_TITLE_THEME}>
                        <FlexBox>
                            {course.title}
                        </FlexBox>
                        <FlexBox>
                            Course Description
                        </FlexBox>
                    </FlexBox>
                </CoursesContentElement>
            )
        });
    }

    const renderLessonList = () => {
        return COURSES[selectedCourse].lessons.map((lesson, i) => {
            return(
                <LessonListElement key={i}>
                    {lesson.title}
                </LessonListElement>
            );
        })
    }

    return(
        <CoursesContentContainer>
            <CoursesListContainer>
                <Text theme={TITLE_THEME} style={{  height: '2em', background: theme.colors.mainBlue, color: 'white', borderRadius: '0.2em 0 0 0', fontSize: '1.2em'  }}>
                    My Courses
                </Text>
                <div className="hideScrollbar" style={{ margin: '0.5em 0 0.5em 0.5em', overflow: 'scroll', flexDirection: 'column', position: 'relative', height: '35em' }}>
                    {renderCourseList()}
                </div>
            </CoursesListContainer>
            <CourseLessonsContainer className="hideScrollbar">
                <Text theme={TITLE_THEME} style={{ height: '2em', background: theme.colors.mainBlue, color: 'white', borderLeft: '1px solid white', borderRadius: '0 0.2em 0 0', fontSize: '1.2em'  }}>
                    Course Lessons
                </Text>
                {renderLessonList()}
            </CourseLessonsContainer>
        </CoursesContentContainer>
    );
}

export default CoursesContent;