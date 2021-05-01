import React from 'react';
import { Client } from '../../../../../../../interfaces/clientInterfaces/Client';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import PrimaryButton from '../../../../../elements/desktop/commonElements/PrimaryButton';
import ProfileCardContentContainer from '../../../../../elements/desktop/usersElements/ProfileCardContentContainer';
import UserProfileProgramsElement from '../../../../../elements/desktop/usersElements/UserProfileProgramsElement';
import { theme } from '../../../../../theme';

const CONTENT_ELEMENT = {
    margin: '0.5em'
}

const ASSIGN_NEW_COURSE_BUTTON = {
    color: theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme.colors.white,
    hoverColor: 'green'
}

const renderClientCourses = (userCard: Client) => {
    return userCard.activeCourses.map((course) => {
        return (
            <UserProfileProgramsElement>
             {course.title}
            </UserProfileProgramsElement>
        );
    })
}

interface Props {
    userCard: Client
}

const ProgramsContent: React.FC<Props> = (props) => {
    if (!props.userCard.id) {
        return(
            <div style={{ color: theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>
        );
    } else {
        return(
            <ProfileCardContentContainer style={{ width: '100%' }}>
                {renderClientCourses(props.userCard)}
                <PrimaryButton theme={ASSIGN_NEW_COURSE_BUTTON}>
                    Assign New Course
                </PrimaryButton>
            </ProfileCardContentContainer>
        );
    }
}

export default ProgramsContent;