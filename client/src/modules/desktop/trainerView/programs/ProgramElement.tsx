import React from 'react';
import ProgramElementTitle from '../../../../elements/desktop/programsElements/ProgramElementTitle';
import SettingsContainer from '../../../../elements/desktop/dashboardElements/SettingsContainer';
import SettingsIcon from '../../../../elements/desktop/dashboardElements/SettingsIcon';
import ProgramElement from '../../../../elements/desktop/programsElements/ProgramElement';
import history from '../../../../history';
import Text from '../../../../elements/desktop/commonElements/Text';
import { theme } from '../../../../theme';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import { Course } from '../../../../../../interfaces/courseInterfaces/Course';
import { url } from 'inspector';

const goToSettings = (e: any, course: Course) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/programs/${course._id}/settings`);
}

interface OwnProps {
    course: Course
}

const TITLE_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    fontSize: '1.5em',
    color: theme.colors.white
}

const Element: React.FC<OwnProps> = (props) => {
    console.log(props.course);
    return(
        <ProgramElement theme={{ backgroundImage: props.course.imageURL }} onClick={() => history.push({
            pathname: `/programs/${props.course._id}`,
            state: props.course 
            })}>
            <SettingsContainer>
                <FlexBox style={{ backgroundColor: 'rgb(255, 255, 255, 1)', height: '2em', width: '2em', justifyContent: 'center', alignItems: 'center', borderRadius: '0 0.2em 0 0.2em' }}>
                    <SettingsIcon onClick={(e) => e.target === e.currentTarget ? null : goToSettings(e, props.course) }>
                        <i className="fas fa-cog"></i>
                    </SettingsIcon>
                </FlexBox>  
            </SettingsContainer>
            <ProgramElementTitle>
                <Text theme={TITLE_THEME}>
                    {props.course.title}
                </Text>
            </ProgramElementTitle>
        </ProgramElement>
    );
}

export default Element;