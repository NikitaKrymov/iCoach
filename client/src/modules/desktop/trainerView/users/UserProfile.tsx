import React from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import UserListPhotoElement from '../../../../elements/desktop/usersElements/UserListPhotoElement';
import { theme } from '../../../../theme';
import Text from '../../../../elements/desktop/commonElements/Text';
import GridBox from '../../../../elements/desktop/commonElements/GridBox';
import OptionTab from '../../../../elements/desktop/usersElements/OptionTab';
import UserCardContainer from '../../../../elements/desktop/usersElements/UserCardContainer';
import ProfileContent from './userCardContent/ProfileContent';
import ProgramsContent from './userCardContent/ProgramsContent';
import PurchasesContent from './userCardContent/PurchasesContent';

const TABS = [
    {
        label: 'Profile',
        id: 0
    },
    {
        label: 'Programs',
        id: 1
    },
    {
        label: 'Purchases',
        id: 2
    }
]

const NAME_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center,
    margin: '1em',
    fontSize: '1.5em'
}

const renderContent = (tabID: number, userCard: any) => {
    switch(tabID){
        default:
            return <ProfileContent userCard={userCard} />
        case 1: 
            return <ProgramsContent userCard={userCard} />
        case 2: 
            return <PurchasesContent userCard={userCard} />
    }
}

interface Props {
    userCard: any
}

const UserProfile: React.FC<Props> = (props) => {
    const [tabID, setTabID] = React.useState(0);

    return(
        <UserCardContainer style={{ height: '100%', margin: '2em'}}>
            <FlexBox theme={NAME_FLEXBOX_THEME}>
                <UserListPhotoElement>
                    <i style={{ color: 'white' }} className="fas fa-user"></i>
                </UserListPhotoElement>
                <Text style={{ alignItems: 'center' }}>
                    {props.userCard.firstName} { props.userCard.lastName}
                </Text>
            </FlexBox>
            <GridBox theme={{ gridTemplateColumns: '1fr 1fr 1fr'}} style={{ width: '100%', margin: '1em'}}>
                {TABS.map((tab, i) => {
                    return(
                        <OptionTab key={i} onClick={() => setTabID(tab.id)} style={{ borderBottom: tabID === tab.id ? '3px solid #5c18fc' : '3px solid grey', color: tabID === tab.id ? '#5c18fc' : 'grey' }}>
                            {tab.label}
                        </OptionTab>
                    );
                })}
            </GridBox>
            <FlexBox style={{ width: '100%', justifyContent: 'center' }}>
                {renderContent(tabID, props.userCard)}
            </FlexBox>
        </UserCardContainer>
    );
}

export default UserProfile;