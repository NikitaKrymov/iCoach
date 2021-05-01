import React from 'react';
import AccountButton from '../../../../elements/desktop/accountElements/AccountButton';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import CreateNewProgramButton from '../../../../elements/desktop/programsElements/CreateNewProgramButton';
import ProgramsOptions from '../../../../elements/desktop/programsElements/ProgramsOptions';
import history from '../../../../history';

interface Props {
    trainerId: string
}

const ProgramsTabBar: React.FC<Props> = (props) => {
    return(
        <ProgramsOptions>
            <CreateNewProgramButton onClick={() => history.push('/createNewCourse', props.trainerId)}>
                + Create New Course
            </CreateNewProgramButton>
        </ProgramsOptions>
    );
}

export default ProgramsTabBar;