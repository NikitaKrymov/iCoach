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
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createNewCourseRequest } from '../../../../actions/trainerActions';
import { NewCourse } from '../../../../../../interfaces/courseInterfaces/NewCourse';

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
    trainerId: string,
    location: any
}

type Props = OwnProps & MapDispatchToProps;

const NewCourseModule: React.FC<Props> = (props) => {

    const [fileSource, setFileSource] = useState<any>();
    const [image, setImage] = useState<any>();

    const [newCourse, setNewCourse] = useState<NewCourse>({
        title: "",
        description: "",
        accessToContent: 0,
        imageURL: "",
        programStart: 0,
        contentVisibility: 0,
        coursePrice: 0,
        numberOfPurchases: 0,
        trainer: props.location.state,
        totalUsers: 0
    });

    const onImageChange = (event: any) => {
        const data = new FormData();
        const reader = new FileReader();
        const file = event.target.files[0];
        data.append('backgroundImageFile', file);
        console.log(data, file);
        setImage(data);
        reader.onload = (e: any) => {
            setFileSource(e.target.result);
        }
        reader.readAsDataURL(file);
    }
    
    console.log(props);
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
                            <SettingsInput placeholder="Course Name" onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
                        </FlexBox>
                        <FlexBox>
                            <SettingsInput placeholder="Course Description" style={{ height: '6em' }} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
                        </FlexBox>
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
                </SettingsBlock>
                <SettingsBlock>
                    <SettingsBlockTitle>
                        <div style={{ fontSize: '1.5em'}}>
                            Course background image
                        </div>
                    </SettingsBlockTitle>
                    <FlexBox theme={DETAILS_BLOCK_THEME} style={{ width: '50em'}}>
                        {/* <form name="courseImage" action="/api/uploadFile" encType="multipart/form-data" method="post">
                            <SettingsInput name="myFile" placeholder="Course Name" type="file" />
                            <input type="submit" />
                        </form> */}
                        <FlexBox>
                            <SettingsInput accept="image/*" placeholder="Course Name" type="file" onChange={(e) => onImageChange(e)} />
                        </FlexBox>
                        <FlexBox>
                            <img style={{ width: '26em', height: '16em' }} src={fileSource} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={CENTER_THEME}>
                        <PrimaryButton onClick={() => { props.createNewCourse(newCourse, image) } } theme={SAVE_BUTTON_THEME}  >
                            Create Course
                        </PrimaryButton>
                    </FlexBox>
                </SettingsBlock>
            </FlexBox>
        </SettingsContainer>
    );
}

interface MapDispatchToProps {
    createNewCourse: (newCourse: any, image: any) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    createNewCourse: (newCourse, image) => dispatch(createNewCourseRequest(newCourse, image))
})

export default connect(null, mapDispatchToProps)(NewCourseModule);