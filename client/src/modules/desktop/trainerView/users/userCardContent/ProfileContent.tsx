import React from 'react';
import { Client } from '../../../../../../../interfaces/clientInterfaces/Client';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import InBlockSpinner from '../../../../../elements/desktop/InBlockSpinner';
import ProfileCardContentContainer from '../../../../../elements/desktop/usersElements/ProfileCardContentContainer';
import UserCardContainer from '../../../../../elements/desktop/usersElements/UserCardContainer';
import { theme } from '../../../../../theme';

const CONTENT_ELEMENT = {
    margin: '0.5em'
}

interface Props {
    userCard: Client
}

const ProfileContent: React.FC<Props> = (props) => {

    if (!props.userCard.id) {
        return(
            <div style={{ color: theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>
        );
    } else {
        return(
            <ProfileCardContentContainer style={{ alignItems: 'flex-start' }}>
                <FlexBox>
                    <FlexBox theme={CONTENT_ELEMENT}>
                        Email: 
                    </FlexBox>
                    <FlexBox theme={CONTENT_ELEMENT}>
                        {props.userCard.contacts.email}
                    </FlexBox>
                </FlexBox>
                <FlexBox>
                    <FlexBox theme={CONTENT_ELEMENT}>
                        Phone: 
                    </FlexBox>
                    <FlexBox theme={CONTENT_ELEMENT}>
                        {props.userCard.contacts.phone}
                    </FlexBox>
                </FlexBox>
            </ProfileCardContentContainer>
        );
    }
}

export default ProfileContent;