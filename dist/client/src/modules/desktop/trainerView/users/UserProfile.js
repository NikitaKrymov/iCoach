"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var UserListPhotoElement_1 = __importDefault(require("../../../../elements/desktop/usersElements/UserListPhotoElement"));
var theme_1 = require("../../../../theme");
var Text_1 = __importDefault(require("../../../../elements/desktop/commonElements/Text"));
var GridBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/GridBox"));
var OptionTab_1 = __importDefault(require("../../../../elements/desktop/usersElements/OptionTab"));
var UserCardContainer_1 = __importDefault(require("../../../../elements/desktop/usersElements/UserCardContainer"));
var ProfileContent_1 = __importDefault(require("./userCardContent/ProfileContent"));
var ProgramsContent_1 = __importDefault(require("./userCardContent/ProgramsContent"));
var PurchasesContent_1 = __importDefault(require("./userCardContent/PurchasesContent"));
var TABS = [
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
];
var NAME_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    alignItems: theme_1.theme.alignItems.center,
    margin: '1em',
    fontSize: '1.5em'
};
var renderContent = function (tabID, userCard) {
    switch (tabID) {
        default:
            return <ProfileContent_1.default userCard={userCard}/>;
        case 1:
            return <ProgramsContent_1.default userCard={userCard}/>;
        case 2:
            return <PurchasesContent_1.default userCard={userCard}/>;
    }
};
var UserProfile = function (props) {
    var _a = react_1.default.useState(0), tabID = _a[0], setTabID = _a[1];
    return (<UserCardContainer_1.default style={{ height: '100%', margin: '2em' }}>
            <FlexBox_1.default theme={NAME_FLEXBOX_THEME}>
                <UserListPhotoElement_1.default>
                    <i style={{ color: 'white' }} className="fas fa-user"></i>
                </UserListPhotoElement_1.default>
                <Text_1.default style={{ alignItems: 'center' }}>
                    {props.userCard.firstName} {props.userCard.lastName}
                </Text_1.default>
            </FlexBox_1.default>
            <GridBox_1.default theme={{ gridTemplateColumns: '1fr 1fr 1fr' }} style={{ width: '100%', margin: '1em' }}>
                {TABS.map(function (tab, i) {
            return (<OptionTab_1.default onClick={function () { return setTabID(tab.id); }} style={{ borderBottom: tabID === tab.id ? '3px solid #5c18fc' : '3px solid grey', color: tabID === tab.id ? '#5c18fc' : 'grey' }}>
                            {tab.label}
                        </OptionTab_1.default>);
        })}
            </GridBox_1.default>
            <FlexBox_1.default style={{ width: '100%', justifyContent: 'center' }}>
                {renderContent(tabID, props.userCard)}
            </FlexBox_1.default>
        </UserCardContainer_1.default>);
};
exports.default = UserProfile;
