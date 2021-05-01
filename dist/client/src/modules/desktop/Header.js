"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AccountButton_1 = __importDefault(require("../../elements/desktop/accountElements/AccountButton"));
var FlexBox_1 = __importDefault(require("../../elements/desktop/commonElements/FlexBox"));
var HeaderContainer_1 = __importDefault(require("../../elements/desktop/headerElements/HeaderContainer"));
var Logo_1 = __importDefault(require("../../elements/desktop/headerElements/Logo"));
var theme_1 = require("../../theme");
var Menu_1 = __importDefault(require("./Menu"));
var history_1 = __importDefault(require("../../history"));
var FLEX_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    margin: '1em 0 0 0'
};
var Header = function () {
    return (<HeaderContainer_1.default>
            <FlexBox_1.default theme={FLEX_THEME}>
                <Logo_1.default style={{ color: '#FFF' }}>
                    iCoach
                </Logo_1.default>
            </FlexBox_1.default>
            <FlexBox_1.default theme={FLEX_THEME}>
                <Menu_1.default />
            </FlexBox_1.default>
            <FlexBox_1.default theme={FLEX_THEME}>
                <AccountButton_1.default onClick={function () { return history_1.default.push('/profile'); }}>
                    <i className="fas fa-user-circle"></i>
                </AccountButton_1.default>
            </FlexBox_1.default>
        </HeaderContainer_1.default>);
};
exports.default = Header;
