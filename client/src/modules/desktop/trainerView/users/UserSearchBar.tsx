import React from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import Icon from '../../../../elements/desktop/commonElements/Icon';
import OptionBox from '../../../../elements/desktop/programsElements/OptionBox';
import SearchBar from '../../../../elements/desktop/usersElements/SearchBar';
import { theme } from '../../../../theme';

const FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sb,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.row,
}

const SEARCH_BAR_THEME = {
    justifyContent: theme.justifyContent.flexStart
}

interface Props {
    openModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UserSearchBar: React.FC<Props> = (props) => {
    return(
        <FlexBox theme={FLEXBOX_THEME} style={{ width: '100%'}}>
            <FlexBox style={{ width: '100%' }} theme={SEARCH_BAR_THEME}>
                <FlexBox>
                    <Icon style={{ padding: '0.5em 0.5em 0.5em 0'}}>
                        <i className="fas fa-search"></i>
                    </Icon>
                </FlexBox>
                <SearchBar placeholder="Search for clients" />
            </FlexBox>
            <FlexBox>
                <OptionBox onClick={() => props.openModal(true)}>
                    +
                </OptionBox>
            </FlexBox>
        </FlexBox>
    );
}

export default UserSearchBar;