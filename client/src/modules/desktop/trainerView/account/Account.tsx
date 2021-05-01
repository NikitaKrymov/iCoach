import React from 'react';
import AccountContainer from '../../../../elements/desktop/accountElements/AccountContainer';
import AccountContent from '../../../../elements/desktop/accountElements/AccountContent';
import AccountInput from '../../../../elements/desktop/accountElements/AccountInput';
import AccountMenu from '../../../../elements/desktop/accountElements/AccountMenu';
import AccountMenuElement from '../../../../elements/desktop/accountElements/AccountMenuElement';
import AccountPhoto from '../../../../elements/desktop/accountElements/AccountPhoto';
import AccountPhotoContainer from '../../../../elements/desktop/accountElements/AccountPhotoContainer';
import AccountPhotoText from '../../../../elements/desktop/accountElements/AccountPhotoText';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import PrimaryButton from '../../../../elements/desktop/commonElements/PrimaryButton';
import { theme } from '../../../../theme';
import CoursesContent from './CoursesContent';
import ProfileContent from './ProfileContent';

const PAGE_TITLE_THEME = {
    justifyContent: theme.justifyContent.center,
    fontSize: '1.5em',
    width: '100%'
}

const TITLE_THEME = {
    margin: '1em 0 0.5em 2em',
    width: '100%'
}

const INPUT_THEME = {
    width: '100%'
}

const SAVE_BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme.colors.white,
    hoverColor: 'green'
}

const ACCOUNT_MENU_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column,
    margin: '2em 0 0 0'
}

const ACCOUNT_MENU = [
    {
        id: 0,
        label: 'Profile'
    },
    {
        id: 1,
        label: 'Courses'
    }
]

const renderContent = (activeMenu: number) => {
    switch (activeMenu) {
        default: 
            return <ProfileContent />;
        case 1:
            return <CoursesContent />;
    }
}

const Account: React.FC = (props) => {
    const [hoverPhoto, setHoverPhoto] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(0);

    return(
        <AccountContainer>
            <AccountMenu>
                <FlexBox>
                    <AccountPhotoContainer onMouseOver={() => setHoverPhoto(true)}>
                        {hoverPhoto ? <AccountPhotoText style={{ background: hoverPhoto ? 'rgb(255, 255, 255, 0.5)' : '(255, 255, 255, 0)'}} onMouseOut={() => setHoverPhoto(false)} >Change Photo</AccountPhotoText> : null}
                        <AccountPhoto />
                    </AccountPhotoContainer>
                </FlexBox>
                <FlexBox theme={ACCOUNT_MENU_THEME}>
                    {ACCOUNT_MENU.map((element, i) => {
                        return(
                            <AccountMenuElement style={{ borderBottom: activeMenu === element.id ? `1px solid ${theme.colors.primary}` : `none` }} onClick={() => setActiveMenu(element.id) }>
                                {element.label}
                            </AccountMenuElement>
                        );
                    })}
                </FlexBox>
            </AccountMenu>
            <AccountContent>
                {renderContent(activeMenu)}
            </AccountContent>
        </AccountContainer>
    );
}

export default Account;