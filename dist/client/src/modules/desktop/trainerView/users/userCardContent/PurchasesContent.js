"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var ProfileCardContentContainer_1 = __importDefault(require("../../../../../elements/desktop/usersElements/ProfileCardContentContainer"));
var PurchaseListElementContainer_1 = __importDefault(require("../../../../../elements/desktop/usersElements/PurchaseListElementContainer"));
var theme_1 = require("../../../../../theme");
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var LEFT_SIDE_THEME = {
    flexDirection: theme_1.theme.flexDirection.column,
    alignItems: theme_1.theme.alignItems.flexStart,
};
var RIGHT_SIDE_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexEnd
};
var LEFT_BOTTOM_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb
};
var PURCHASE_TITLE = {
    fontSize: '1.5em'
};
var PRICE_STYLE = {
    color: 'grey'
};
var PurchasesContent = function (props) {
    if (!props.userCard.id) {
        return (<div style={{ color: theme_1.theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>);
    }
    else {
        return (<ProfileCardContentContainer_1.default style={{ width: '100%' }}>
                {props.userCard.purchases.map(function (purchase, i) {
                return (<PurchaseListElementContainer_1.default style={{ background: i / 2 % 1 ? 'lightgrey' : 'white' }} key={i}>
                            <FlexBox_1.default theme={LEFT_SIDE_THEME}>
                                <FlexBox_1.default style={PURCHASE_TITLE}>
                                    {purchase.title}
                                </FlexBox_1.default>
                                <FlexBox_1.default style={PRICE_STYLE} theme={LEFT_BOTTOM_THEME}>
                                    <FlexBox_1.default>
                                        {purchase.price}$
                                    </FlexBox_1.default>
                                </FlexBox_1.default>
                            </FlexBox_1.default>
                            <FlexBox_1.default theme={RIGHT_SIDE_THEME}>
                                {purchase.date.getDate()} {MONTHS[purchase.date.getMonth() - 1]}
                            </FlexBox_1.default>
                        </PurchaseListElementContainer_1.default>);
            })}
            </ProfileCardContentContainer_1.default>);
    }
};
exports.default = PurchasesContent;
