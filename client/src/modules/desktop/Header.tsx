import React from 'react';
import AccountButton from '../../elements/desktop/accountElements/AccountButton';
import FlexBox from '../../elements/desktop/commonElements/FlexBox';
import HeaderContainer from '../../elements/desktop/headerElements/HeaderContainer';
import Logo from '../../elements/desktop/headerElements/Logo';
import { theme } from '../../theme';
import Menu from './Menu';
import history from '../../history';


const FLEX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    margin: '1em 0 0 0'
}


const Header: React.FC = () => {
    return(
        <HeaderContainer >
            <FlexBox theme={FLEX_THEME}>
                <Logo style={{ color: '#FFF'}}>
                    iCoach
                </Logo>
            </FlexBox>
            <FlexBox theme={FLEX_THEME}>
                <Menu />
            </FlexBox>
            <FlexBox  theme={FLEX_THEME}>
                <AccountButton onClick={() => history.push('/profile')}>
                    <i className="fas fa-user-circle"></i>
                </AccountButton>
            </FlexBox>
        </HeaderContainer>
    );
}

export default Header;