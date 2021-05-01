"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AccountContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountContainer"));
var AccountContent_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountContent"));
var AccountMenu_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountMenu"));
var AccountMenuElement_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountMenuElement"));
var AccountPhoto_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountPhoto"));
var AccountPhotoContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountPhotoContainer"));
var AccountPhotoText_1 = __importDefault(require("../../../../elements/desktop/accountElements/AccountPhotoText"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var theme_1 = require("../../../../theme");
var CoursesContent_1 = __importDefault(require("./CoursesContent"));
var ProfileContent_1 = __importDefault(require("./ProfileContent"));
var PAGE_TITLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    fontSize: '1.5em',
    width: '100%'
};
var TITLE_THEME = {
    margin: '1em 0 0.5em 2em',
    width: '100%'
};
var INPUT_THEME = {
    width: '100%'
};
var SAVE_BUTTON_THEME = {
    color: theme_1.theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme_1.theme.colors.white,
    hoverColor: 'green'
};
var ACCOUNT_MENU_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    alignItems: theme_1.theme.alignItems.center,
    flexDirection: theme_1.theme.flexDirection.column,
    margin: '2em 0 0 0'
};
var ACCOUNT_MENU = [
    {
        id: 0,
        label: 'Profile'
    },
    {
        id: 1,
        label: 'Courses'
    }
];
var renderContent = function (activeMenu) {
    switch (activeMenu) {
        default:
            return <ProfileContent_1.default />;
        case 1:
            return <CoursesContent_1.default />;
    }
};
var Account = function (props) {
    var _a = react_1.default.useState(false), hoverPhoto = _a[0], setHoverPhoto = _a[1];
    var _b = react_1.default.useState(0), activeMenu = _b[0], setActiveMenu = _b[1];
    return (<AccountContainer_1.default>
            <AccountMenu_1.default>
                <FlexBox_1.default>
                    <AccountPhotoContainer_1.default onMouseOver={function () { return setHoverPhoto(true); }}>
                        {hoverPhoto ? <AccountPhotoText_1.default style={{ background: hoverPhoto ? 'rgb(255, 255, 255, 0.5)' : '(255, 255, 255, 0)' }} onMouseOut={function () { return setHoverPhoto(false); }}>Change Photo</AccountPhotoText_1.default> : null}
                        <AccountPhoto_1.default />
                    </AccountPhotoContainer_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default theme={ACCOUNT_MENU_THEME}>
                    {ACCOUNT_MENU.map(function (element, i) {
            return (<AccountMenuElement_1.default style={{ borderBottom: activeMenu === element.id ? "1px solid " + theme_1.theme.colors.primary : "none" }} onClick={function () { return setActiveMenu(element.id); }}>
                                {element.label}
                            </AccountMenuElement_1.default>);
        })}
                </FlexBox_1.default>
            </AccountMenu_1.default>
            <AccountContent_1.default>
                {renderContent(activeMenu)}
            </AccountContent_1.default>
        </AccountContainer_1.default>);
};
exports.default = Account;
