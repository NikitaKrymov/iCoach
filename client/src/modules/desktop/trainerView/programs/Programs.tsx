import React, { useEffect, useState } from 'react';
import ProgramElement from './ProgramElement';
import '../../../../css/main.css';
import ProgramsContainer from '../../../../elements/desktop/programsElements/ProgramsContainer';
import GridBox from '../../../../elements/desktop/commonElements/GridBox';
import ProgramsTabBar from './ProgramsTabBar';
import { AppState } from '../../../../reducers/rootReducer';
import { Course } from '../../../../../../interfaces/courseInterfaces/Course';
import { connect } from 'react-redux';
import InBlockSpinner from '../../../../elements/desktop/InBlockSpinner';
import { Dispatch } from 'redux';
import { fetchTrainerCoursesRequest } from '../../../../actions/trainerActions';
import CreateNewCourseModal from './CreateNewCourseModal';

const renderProgramList = (courses: Course[]) => {
    return courses.map((e, i) => {
        return(
            <ProgramElement course={e} key={i} />
        );
    })
}

type Props = MapStateToProps & MapDispatchToProps;

const Dashboard: React.FC<Props> = (props) => {
    useEffect(() => {
        props.fetchCourses(props.trainerId)
    }, [])

    if (props.isTrainerCoursesLoading){
        return(
            <InBlockSpinner>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner>
        ); 
    } else {
        return(
            <GridBox theme={{ gridTemplateRows: '1fr 20fr' }}>
                <ProgramsTabBar trainerId={props.trainerId} />
                <ProgramsContainer className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll'}}>
                        {renderProgramList(props.courses)}
                </ProgramsContainer>
            </GridBox>
        );
    }
}

interface MapStateToProps {
    courses: Course[],
    isTrainerCoursesLoading?: boolean,
    trainerId: string

}

interface MapDispatchToProps {
    fetchCourses: (trainerId: string) => void,
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    courses: state.app.courses,
    isTrainerCoursesLoading: state.isLoading.isTrainerCoursesLoading,
    trainerId: state.app.userData.id
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchCourses: (trainerId) => dispatch(fetchTrainerCoursesRequest(trainerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);