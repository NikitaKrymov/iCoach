"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var ProfileCardContentContainer_1 = __importDefault(require("../../../../../elements/desktop/usersElements/ProfileCardContentContainer"));
var theme_1 = require("../../../../../theme");
var CONTENT_ELEMENT = {
    margin: '0.5em'
};
var ProfileContent = function (props) {
    if (!props.userCard.id) {
        return (<div style={{ color: theme_1.theme.colors.grey, marginTop: '2em' }}>
                Select the user from your user list to open the details
            </div>);
    }
    else {
        return (<ProfileCardContentContainer_1.default style={{ alignItems: 'flex-start' }}>
                <FlexBox_1.default>
                    <FlexBox_1.default theme={CONTENT_ELEMENT}>
                        Email: 
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={CONTENT_ELEMENT}>
                        {props.userCard.contacts.email}
                    </FlexBox_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default>
                    <FlexBox_1.default theme={CONTENT_ELEMENT}>
                        Phone: 
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={CONTENT_ELEMENT}>
                        {props.userCard.contacts.phone}
                    </FlexBox_1.default>
                </FlexBox_1.default>
            </ProfileCardContentContainer_1.default>);
    }
};
exports.default = ProfileContent;
