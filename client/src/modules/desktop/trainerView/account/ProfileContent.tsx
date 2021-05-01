import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Client } from '../../../../../../interfaces/clientInterfaces/Client';
import { Trainer } from '../../../../../../interfaces/trainerInterfaces/Trainer';
import EditIcon from '../../../../elements/desktop/accountElements/EditIcon';
import ProfileContentContainer from '../../../../elements/desktop/accountElements/ProfileContentContainer';
import InformationContent from '../../../../elements/desktop/accountElements/profileElements/InformationContent.tsx';
import ProfilePrimaryButton from '../../../../elements/desktop/accountElements/ProfilePrimaryButton';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import Text from '../../../../elements/desktop/commonElements/Text';
import { AppState } from '../../../../reducers/rootReducer';
import { theme } from '../../../../theme';

const SECOND_ROW_THEME = {
    flexDirection: 'column',
}

const SECOND_ROW_TITLE_THEME = {
    color: theme.colors.mainBlue,
    fontSize: '1em',
    justifyContent: theme.justifyContent.flexStart
}

const FLEX_TITLE_STYLE = {
    width: '100%'
}

const INPUT_STYLE = {
    width: '90%',
    height: '2em'
}

const FIRST_ROW_TITLE = {
    color: theme.colors.mainBlue,
    fontSize: '1.5em',
    justifyContent: theme.justifyContent.sb
}

const EDIT_MODE_FALSE_TEXT_THEME = {
    alignItems: theme.alignItems.center,
    margin: '0.5em 0 0 0',
    color: theme.colors.grey,
    width: "100%",
    justifyContent: theme.justifyContent.flexStart,
    fontSize: '0.9em'
}

type Props = MapStateToProps & MapDispatchToProps;

const editModeTrue = (setEditMode: React.Dispatch<React.SetStateAction<boolean>>, userData: Trainer | Client) => {
    return(
        <ProfileContentContainer>
            <InformationContent>
                <FlexBox style={FIRST_ROW_TITLE}>
                    <FlexBox>
                        Personal Information
                    </FlexBox>
                    <ProfilePrimaryButton onClick={() => setEditMode(false)}>
                        Save
                    </ProfilePrimaryButton>
                </FlexBox>
                <FlexBox theme={SECOND_ROW_THEME}>
                    <FlexBox theme={{ justifyContent: 'space-between'}}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                First Name
                            </Text>
                            <input style={INPUT_STYLE}  type="text" placeholder={userData.firstName} />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Last Name
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder={userData.lastName} />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                School Name
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder={'Nothing '} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'center' }}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={{ width: '100%'}}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                About
                            </Text>
                            <textarea placeholder="Tell us about your skills and school" style={{ width: '100%', height: '10em' }} />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </InformationContent>
            <InformationContent style={{ marginTop: '1em'}}>
                <FlexBox style={FIRST_ROW_TITLE}>
                    Contact Information
                </FlexBox>
                <FlexBox theme={SECOND_ROW_THEME}>
                    <FlexBox theme={{ justifyContent: 'space-between'}}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Phone
                            </Text>
                            <input style={INPUT_STYLE}  type="text" placeholder="7372173752" />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Email
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder="email@gmail.com" />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                City
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder="Austin" />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'space-between'}}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                State
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder="Texas" />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                Street Address
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder="2801 Wells Branch PKWY" />
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                Zip-Code
                            </Text>
                            <input style={INPUT_STYLE} type="text" placeholder="78728" />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>            
            </InformationContent>
        </ProfileContentContainer>
    );
}

const editModeFalse = (setEditMode: React.Dispatch<React.SetStateAction<boolean>>, userData: Trainer | Client ) => {
    return(
        <ProfileContentContainer>
            <InformationContent>
                <FlexBox style={FIRST_ROW_TITLE}>
                    <FlexBox>
                        Personal Information
                    </FlexBox>
                    <EditIcon onClick={() => setEditMode(true)}>
                        <i className="far fa-edit"></i>
                    </EditIcon>
                </FlexBox>
                <FlexBox theme={SECOND_ROW_THEME}>
                    <FlexBox theme={{ justifyContent: 'space-between'}} >
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                First Name
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Nikita
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Last Name
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Krymov
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                School Name
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                ProTennis
                            </Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'center' }}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={{ width: '100%'}}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                About
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint libero necessitatibus, ut ducimus voluptates non error, eaque eos consequuntur similique numquam officiis? Vel voluptates deserunt beatae, nobis aut a.
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </InformationContent>
            <InformationContent style={{ marginTop: '1em'}}>
                <FlexBox style={FIRST_ROW_TITLE}>
                    Contact Information
                </FlexBox>
                <FlexBox theme={SECOND_ROW_THEME}>
                    <FlexBox theme={{ justifyContent: 'space-between'}}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Phone
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                727-217-3730
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                Email
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                email@email.com
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0'}}>
                                City
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Austin
                            </Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'space-between'}}>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                State
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Texas
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                Street Address
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                2801 Wells Branch PKWY
                            </Text>
                        </FlexBox>
                        <FlexBox theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0'}}>
                                Zip-Code
                            </Text>
                            <Text theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                78728
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>            
            </InformationContent>
        </ProfileContentContainer>
    );
}

const ProfileContent: React.FC<Props> = (props) => {
    const [editMode, setEditMode] = React.useState(false);

    if (editMode){
        return editModeTrue(
            setEditMode,
            props.userData
        );
    } else {
        return editModeFalse(
            setEditMode,
            props.userData
        );
    }
}

interface MapStateToProps {
    userData: Trainer | Client;
}

interface MapDispatchToProps {
    saveUserData: () => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    userData: state.app.userType
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    saveUserData: () => dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);