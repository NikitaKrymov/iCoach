import React from 'react';
import FlexBox from '../../elements/desktop/commonElements/FlexBox';
import MenuElement from '../../elements/desktop/menuElements/MenuElement';
import history from '../../history';
import Text from '../../elements/desktop/commonElements/Text';
import { theme } from '../../theme';

const TRAINER_MENU_ELEMENTS = [
    {
        label: 'Dashboard',
        icon: 'fas fa-book',
        id: 1,
        path: '/'
    },
    {
        label: 'Programs',
        icon: 'fas fa-user-friends',
        id: 2,
        path: '/programs'
    },
    {
        label: 'Clients',
        icon: 'fas fa-headset',
        id: 3,
        path: '/clients'
    },

    {
        label: 'Support',
        icon: 'fas fa-headset',
        id: 4,
        path: '/support'
    },
]

const FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.column,
    margin: '1em 0 0 0'
}

const Menu: React.FC = () => {
    const [tab, setTab] = React.useState(1);

    return(
        <FlexBox theme={FLEXBOX_THEME}>
            {TRAINER_MENU_ELEMENTS.map((element, i) => {
                return(
                    <MenuElement style={{ backgroundColor: element.id === tab ? theme.colors.mainGrey : theme.colors.mainBlue, color: element.id === tab ? theme.colors.mainBlue : theme.colors.white }} 
                        onClick={() => { setTab(element.id); history.push(`${element.path}`) }}>
                        <Text style={{ fontSize: '1.3em' }}>
                            {element.label} 
                        </Text>
                    </MenuElement>
                );
            })}
        </FlexBox>
    );
}

export default Menu;