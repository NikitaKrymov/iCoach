import React from 'react';
import UserListElementContainer from '../../../../elements/desktop/usersElements/UserListElementContainer';
import Text from '../../../../elements/desktop/commonElements/Text';
import { theme } from '../../../../theme';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import UserListPhotoElement from '../../../../elements/desktop/usersElements/UserListPhotoElement';
import Icon from '../../../../elements/desktop/commonElements/Icon';
import { Client } from '../../../../../../interfaces/clientInterfaces/Client';

const NAME_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center,

}
const PROFILE_THEME = {
    margin: '0 1em 0 0',
    fontSize: '1.5em'
}

interface Props {
    user: Client
}

const UserListElement: React.FC<Props> = (props) => {
    return(
        <UserListElementContainer>
            <FlexBox theme={NAME_FLEXBOX_THEME}>
                <UserListPhotoElement>
                    <i style={{ color: 'white' }} className="fas fa-user"></i>
                </UserListPhotoElement>
                <Text>
                    {props.user.firstName} {props.user.lastName}
                </Text>
            </FlexBox>
            <FlexBox theme={PROFILE_THEME}>
                <Icon>
                    <i className="fas fa-id-card"></i>
                </Icon>
            </FlexBox>
        </UserListElementContainer>
    ); 
}

export default UserListElement;