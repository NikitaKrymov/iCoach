import React, { useState } from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import GridBox from '../../../../elements/desktop/commonElements/GridBox';
import Icon from '../../../../elements/desktop/commonElements/Icon';
import CourseContainer from '../../../../elements/desktop/programsElements/CourseContainer';
import LeftCourseDashboard from '../../../../elements/desktop/programsElements/LeftCourseDashboard';
import OptionBox from '../../../../elements/desktop/programsElements/OptionBox';
import RightCourseDashboard from '../../../../elements/desktop/programsElements/RightCourseDashboard';
import SettingsContainer from '../../../../elements/desktop/dashboardElements/SettingsContainer';
import SettingsIcon from '../../../../elements/desktop/dashboardElements/SettingsIcon';
import { theme } from '../../../../theme';
import DraftLessonList from '../lesson/DraftLessonList';
import LessonList from '../lesson/LessonList';
import history from '../../../../history';
import OptionDeleteBox from '../../../../elements/desktop/programsElements/OptionDeleteBox';
import { Course } from '../../../../../../interfaces/courseInterfaces/Course';
import { AppState } from '../../../../reducers/rootReducer';
import { connect } from 'react-redux';

const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sb,
    alignItems: theme.alignItems.flexStart
}
const BACK_ARROW_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    margin: '0.5em'
}
const TITLE_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.flexStart,
    fontSize: '2em'
}
const BOTTOM_GRIDBOX_THEME = {
    gridTemplateColumns: '1fr 1fr'
}
const OPTIONS_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sb,
    alignItems: theme.alignItems.flexStart,
}

const DRAFT_LESSONS_OPTIONS_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sb,
    alignItems: theme.alignItems.center,
    padding: '0.5em'
}

const DRAFT_LESSONS_TITLE_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    fontSize: '1.6em'
}

interface OwnProps {
    match: any,
    location: any
}

type Props = OwnProps;

const Program: React.FC<Props> = (props) => {
    const [isEditMode, setEditMode] = useState(false);

    console.log(props)
    return(
        <CourseContainer>
            <FlexBox theme={TOP_FLEXBOX_THEME}>
                <FlexBox theme={BACK_ARROW_THEME}  onClick={() => history.goBack()}>
                    <Icon style={{ fontSize: '1.5em '}}>
                        <i className="fas fa-chevron-left"></i>
                    </Icon>
                </FlexBox>
                <FlexBox theme={TITLE_THEME}>
                    {props.location.state.title}
                </FlexBox>
                <SettingsContainer>
                    <SettingsIcon onClick={() => history.push(`/programs/${props.location.state.id}/settings`) }>
                        <i className="fas fa-cog"></i>
                    </SettingsIcon>
                </SettingsContainer>
            </FlexBox>
            <GridBox theme={BOTTOM_GRIDBOX_THEME}>
                <LeftCourseDashboard>
                    <FlexBox theme={OPTIONS_FLEXBOX_THEME}>
                        <FlexBox>
                            <OptionBox>
                                <i className="fas fa-plus" title="Add new lesson" />
                            </OptionBox>
                            <OptionBox >
                                <i className="fas fa-user-plus" title="Assign new user" />
                            </OptionBox>
                            <OptionBox style={{ backgroundColor: isEditMode ? theme.colors.blue : '' }} onClick={() => setEditMode(!isEditMode)}>
                                <i className="far fa-edit" title="Edit course" />
                            </OptionBox>
                        </FlexBox>
                        <FlexBox>
                            <OptionDeleteBox>
                                <i className="fas fa-trash-alt"></i>
                            </OptionDeleteBox>
                        </FlexBox>
                    </FlexBox>
                    <LessonList lessons={props.location.state.lessons} isEditMode={isEditMode} courseId={props.location.state.id} />
                </LeftCourseDashboard>
                <RightCourseDashboard>
                    <FlexBox theme={DRAFT_LESSONS_OPTIONS_FLEXBOX_THEME} style={{ borderBottom: '1px solid grey' }}>
                        <FlexBox theme={DRAFT_LESSONS_TITLE_FLEXBOX_THEME} style={{ height: '1.5em'}}>
                            Draft Lessons
                        </FlexBox>
                        <FlexBox theme={DRAFT_LESSONS_TITLE_FLEXBOX_THEME}>
                            All drafts
                        </FlexBox>
                    </FlexBox>
                    <DraftLessonList isEditMode={isEditMode} />
                </RightCourseDashboard>
            </GridBox>
        </CourseContainer>
    );
}

// interface MapStateToProps {
//     course: Course,
// }

// const mapStateToProps = (state: AppState, ownProps: OwnProps): MapStateToProps => ({
//     course: state.app.courses.filter((course: Course) => { if (course.id === ownProps.match.params.id) { return course } })[0]
// });

export default Program;