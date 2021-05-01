import React from 'react';
import { Client } from '../../../../../../../interfaces/clientInterfaces/Client';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import ProfileCardContentContainer from '../../../../../elements/desktop/usersElements/ProfileCardContentContainer';
import PurchaseListElementContainer from '../../../../../elements/desktop/usersElements/PurchaseListElementContainer';
import { theme } from '../../../../../theme';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const LEFT_SIDE_THEME = {
    flexDirection: theme.flexDirection.column,
    alignItems: theme.alignItems.flexStart,
}

const RIGHT_SIDE_THEME = {
    justifyContent: theme.justifyContent.flexEnd
}

const LEFT_BOTTOM_THEME = {
    justifyContent: theme.justifyContent.sb
}

const PURCHASE_TITLE = {
    fontSize: '1.5em' 
}
const PRICE_STYLE = {
    color: 'grey'
}

// export interface Sale {
//     id: string,
//     title: string,
//     courseId: string,
//     date: Date,
//     price: number,
//     clientId: string
//     trainerId: string
// }

interface Props {
    userCard: Client
}

const PurchasesContent: React.FC<Props> = (props) => {
    if (!props.userCard.id) {
        return(
            <div style={{ color: theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>
        );
    } else {
        return(
            <ProfileCardContentContainer style={{ width: '100%' }}>
                {props.userCard.purchases.map((purchase, i) => {
                    return(
                        <PurchaseListElementContainer style={{ background: i/2 % 1 ? 'lightgrey' : 'white'}} key={i}>
                            <FlexBox theme={LEFT_SIDE_THEME}>
                                <FlexBox style={PURCHASE_TITLE}>
                                    {purchase.title}
                                </FlexBox>
                                <FlexBox style={PRICE_STYLE} theme={LEFT_BOTTOM_THEME}>
                                    <FlexBox>
                                        {purchase.price}$
                                    </FlexBox>
                                </FlexBox>
                            </FlexBox>
                            <FlexBox theme={RIGHT_SIDE_THEME}>
                                {purchase.date.getDate()} {MONTHS[purchase.date.getMonth()-1]}
                            </FlexBox>
                        </PurchaseListElementContainer>
                    );
                })}
            </ProfileCardContentContainer>
        );
    }
}

export default PurchasesContent;