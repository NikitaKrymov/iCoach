import React, { useState } from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import GridBox from '../../../../elements/desktop/commonElements/GridBox';
import PrimaryButton from '../../../../elements/desktop/commonElements/PrimaryButton';
import SettingsBlock from '../../../../elements/desktop/settingsElements/SettingsBlock';
import SettingsBlockTitle from '../../../../elements/desktop/settingsElements/SettingsBlockTitle';
import SettingsContainer from '../../../../elements/desktop/settingsElements/SettingsContainer';
import SettingsInput from '../../../../elements/desktop/settingsElements/SettingsInput';
import { theme } from '../../../../theme';
import '../../../../css/main.css';
import { Course } from '../../../../../../interfaces/courseInterfaces/Course';
import { AppState } from '../../../../reducers/rootReducer';
import { connect } from 'react-redux';

const SETTINGS_CONTAINER_THEME = {
    justifyContent: theme.justifyContent.flexEnd,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column
}
const DETAILS_BLOCK_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column,
    margin: '1em 0 1em 0'
}
const CENTER_THEME = {
    alignItems: theme.alignItems.center,
    justifyContent: theme.justifyContent.center
}
const SAVE_BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme.colors.white,
    hoverColor: 'green'
}
const COURSE_SETTINGS_BLOCK_THEME = {
    gridTemplateColumns: '1fr 1fr'
}
const COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME = {
    justifyContent: theme.justifyContent.flexEnd,
    margin: '1em'
}
const COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    margin: '1em',
    flexDirection: theme.flexDirection.column
}

interface OwnProps {
    match: any,
    location: any
}

type Props = MapStateToProps & OwnProps;

const CourseSetting: React.FC<Props> = (props) => {
    console.log(props);
    const [fileSource, setFileSource] = useState<any>();
    const [fileFormData, setFileFormData] = useState<any>();

    const onImageChange = (event: any) => {
        if(event.target.files.length !== 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            const data = new FormData();

            reader.onload = (e: any) => {
            setFileSource(e.target.result);
            data.append('file', file);
            // setFileFormData(data);
            setFileFormData(data);        
        }
        reader.readAsDataURL(file);
        }
    }

    return(
        <SettingsContainer className="hideScrollbar">
            <FlexBox theme={SETTINGS_CONTAINER_THEME} >
                <SettingsBlock>
                    <SettingsBlockTitle>
                        <div style={{ fontSize: '1.5em'}}>
                            Course Details
                        </div>
                    </SettingsBlockTitle>
                    <FlexBox theme={DETAILS_BLOCK_THEME}>
                        <FlexBox>
                            <SettingsInput placeholder="Course Name" />
                        </FlexBox>
                        <FlexBox>
                            <SettingsInput placeholder="Course Description" style={{ height: '6em' }} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={CENTER_THEME}>
                        <PrimaryButton theme={SAVE_BUTTON_THEME}>
                            Save
                        </PrimaryButton>
                    </FlexBox>
                </SettingsBlock>
                <SettingsBlock>
                    <SettingsBlockTitle>
                        <div style={{ fontSize: '1.5em'}}>
                            Course Settings
                        </div>
                    </SettingsBlockTitle>
                    <FlexBox theme={DETAILS_BLOCK_THEME} style={{ flexDirection: 'column'}}>
                        <GridBox theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Content visibility:
                            </FlexBox>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox>
                                    <input type="radio" id='first' name="contentVisibility" /><label htmlFor="first">Only current lesson is visible</label>
                                </FlexBox>
                                <FlexBox>
                                    <input type="radio" id='second' name="contentVisibility" /><label htmlFor="second">Current and previous lessons are visible</label>
                                </FlexBox>
                                <FlexBox>
                                    <input type="radio" id='third' name="contentVisibility"/><label htmlFor="third">Keep all lessons visible</label>
                                </FlexBox>
                            </FlexBox>
                        </GridBox>
                        <GridBox theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Access to a course content:
                            </FlexBox>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox>
                                    <input type="radio" id='first' name="accessToCourse" /><label htmlFor="first">After the previos one is completed</label>
                                </FlexBox>
                                <FlexBox>
                                    <input type="radio" id='second' name="accessToCourse" /><label htmlFor="second">Every day</label>
                                </FlexBox>
                            </FlexBox>
                        </GridBox>
                        <GridBox theme={COURSE_SETTINGS_BLOCK_THEME}>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_LEFT_COLUMN_THEME}>
                                Program start:
                            </FlexBox>
                            <FlexBox theme={COURSE_SETTINGS_BLOCK_RIGHT_COLUMN_THEME}>
                                <FlexBox>
                                    <input type="radio" id='first' name="programStart" /><label htmlFor="first">After purchase</label>
                                </FlexBox>
                                <FlexBox>
                                    <input type="radio" id='second' name="programStart" /><label htmlFor="second">On</label>
                                </FlexBox>
                            </FlexBox>
                        </GridBox>
                    </FlexBox>
                    <FlexBox theme={CENTER_THEME}>
                        <PrimaryButton theme={SAVE_BUTTON_THEME}>
                            Save
                        </PrimaryButton>
                    </FlexBox>
                </SettingsBlock>
                <SettingsBlock>
                    <SettingsBlockTitle>
                        <div style={{ fontSize: '1.5em'}}>
                            Course background image
                        </div>
                    </SettingsBlockTitle>
                    <FlexBox theme={DETAILS_BLOCK_THEME} style={{ width: '50em'}}>
                        <FlexBox>
                            <SettingsInput accept="image/*" placeholder="Course Name" type="file" onChange={(e) => onImageChange(e)} />
                        </FlexBox>
                        <FlexBox>
                            <img style={{ width: '26em', height: '16em' }} src={fileSource} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={CENTER_THEME}>
                        <PrimaryButton onClick={() => console.log("Sending file to the server", fileFormData)} theme={SAVE_BUTTON_THEME}  >
                            Save
                        </PrimaryButton>
                    </FlexBox>
                </SettingsBlock>
            </FlexBox>
        </SettingsContainer>
    );
}

interface MapStateToProps {
    course: Course
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): MapStateToProps => ({
    course: state.app.courses.filter((course: Course) => { if (course._id === ownProps.match.params._id) { return course }} )[0]
});

export default connect(mapStateToProps)(CourseSetting);