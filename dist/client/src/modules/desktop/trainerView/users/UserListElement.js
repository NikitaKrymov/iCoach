"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var UserListElementContainer_1 = __importDefault(require("../../../../elements/desktop/usersElements/UserListElementContainer"));
var Text_1 = __importDefault(require("../../../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../../../theme");
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var UserListPhotoElement_1 = __importDefault(require("../../../../elements/desktop/usersElements/UserListPhotoElement"));
var Icon_1 = __importDefault(require("../../../../elements/desktop/commonElements/Icon"));
var NAME_FLEXBOX_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    alignItems: theme_1.theme.alignItems.center,
};
var PROFILE_THEME = {
    margin: '0 1em 0 0',
    fontSize: '1.5em'
};
var UserListElement = function (props) {
    return (<UserListElementContainer_1.default>
            <FlexBox_1.default theme={NAME_FLEXBOX_THEME}>
                <UserListPhotoElement_1.default>
                    <i style={{ color: 'white' }} className="fas fa-user"></i>
                </UserListPhotoElement_1.default>
                <Text_1.default>
                    {props.user.firstName} {props.user.lastName}
                </Text_1.default>
            </FlexBox_1.default>
            <FlexBox_1.default theme={PROFILE_THEME}>
                <Icon_1.default>
                    <i className="fas fa-id-card"></i>
                </Icon_1.default>
            </FlexBox_1.default>
        </UserListElementContainer_1.default>);
};
exports.default = UserListElement;
