"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var Icon_1 = __importDefault(require("../../../../elements/desktop/commonElements/Icon"));
var OptionBox_1 = __importDefault(require("../../../../elements/desktop/programsElements/OptionBox"));
var SearchBar_1 = __importDefault(require("../../../../elements/desktop/usersElements/SearchBar"));
var theme_1 = require("../../../../theme");
var FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb,
    alignItems: theme_1.theme.alignItems.center,
    flexDirection: theme_1.theme.flexDirection.row,
};
var SEARCH_BAR_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var UserSearchBar = function (props) {
    return (<FlexBox_1.default theme={FLEXBOX_THEME} style={{ width: '100%' }}>
            <FlexBox_1.default style={{ width: '100%' }} theme={SEARCH_BAR_THEME}>
                <FlexBox_1.default>
                    <Icon_1.default style={{ padding: '0.5em 0.5em 0.5em 0' }}>
                        <i className="fas fa-search"></i>
                    </Icon_1.default>
                </FlexBox_1.default>
                <SearchBar_1.default placeholder="Search for clients"/>
            </FlexBox_1.default>
            <FlexBox_1.default>
                <OptionBox_1.default>
                    +
                </OptionBox_1.default>
            </FlexBox_1.default>
        </FlexBox_1.default>);
};
exports.default = UserSearchBar;
