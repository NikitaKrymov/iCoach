import React from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import PrimaryButton from '../../../../elements/desktop/commonElements/PrimaryButton';
import SettingsIcon from '../../../../elements/desktop/dashboardElements/SettingsIcon';
import AddNewUserModalContainer from '../../../../elements/desktop/usersElements/AddNewUserModalContainer';
import CloseModalButton from '../../../../elements/desktop/usersElements/CloseModalButton';
import history from '../../../../history';
import { theme } from '../../../../theme';

const INPUT_STYLE = {
    width: '32em',
    height: '2em',
    marginRight: '2em'
}

const SEND_INVITATION_BUTTON = {
    backgroundColor: 'white'
}

interface Props {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>,
    trainerId: string,
}

const AddNewUserModal: React.FC<Props> = (props) => {
    return(
        <div style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AddNewUserModalContainer>
                <FlexBox style={{ paddingTop: '0.8em', justifyContent: 'space-between', height: '2em', width: '40em', borderBottom: `1px solid ${theme.colors.mainBlue}`, color: theme.colors.black }}>
                    <FlexBox style={{ paddingLeft: '1em' }}>
            
                    </FlexBox>
                    <FlexBox style={{ fontSize: '1.2em' }}>
                        Add New User
                    </FlexBox>
                    <FlexBox style={{ paddingRight: '1em', fontSize: '1.2em' }}>
                        <CloseModalButton onClick={() => props.closeModal(false)}>
                            X
                        </CloseModalButton>
                    </FlexBox>
                </FlexBox>
                <FlexBox style={{ alignItems: 'center' }}>
                    <FlexBox style={{ justifyContent: 'center', width: '100%'}}>
                        Email
                    </FlexBox>
                    <FlexBox>
                        <input style={INPUT_STYLE} />
                    </FlexBox>
                </FlexBox>
                <FlexBox style={{ alignItems: 'center' }}>
                    <FlexBox style={{ justifyContent: 'center', width: '100%'}}>
                        Assign course
                    </FlexBox>
                    <FlexBox>
                        <select style={INPUT_STYLE}>
                            <option>
                                Do not assign a course
                            </option>
                            <option>
                                Course 1
                            </option>   
                            <option>
                                Course 2
                            </option> 
                        </select>                    
                    </FlexBox>
                </FlexBox>
                <FlexBox style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <PrimaryButton theme={SEND_INVITATION_BUTTON} onClick={() => history.push(`/registerNewUser/${props.trainerId}`)}>
                        Send invitation
                    </PrimaryButton>
                </FlexBox>
            </AddNewUserModalContainer>
        </div>
    );
}

export default AddNewUserModal;