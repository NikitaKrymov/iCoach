"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var EditIcon_1 = __importDefault(require("../../../../elements/desktop/accountElements/EditIcon"));
var ProfileContentContainer_1 = __importDefault(require("../../../../elements/desktop/accountElements/ProfileContentContainer"));
var InformationContent_tsx_1 = __importDefault(require("../../../../elements/desktop/accountElements/profileElements/InformationContent.tsx"));
var ProfilePrimaryButton_1 = __importDefault(require("../../../../elements/desktop/accountElements/ProfilePrimaryButton"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var Text_1 = __importDefault(require("../../../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../../../theme");
var SECOND_ROW_THEME = {
    flexDirection: 'column',
};
var SECOND_ROW_TITLE_THEME = {
    color: theme_1.theme.colors.mainBlue,
    fontSize: '1em',
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var FLEX_TITLE_STYLE = {
    width: '100%'
};
var INPUT_STYLE = {
    width: '90%',
    height: '2em'
};
var FIRST_ROW_TITLE = {
    color: theme_1.theme.colors.mainBlue,
    fontSize: '1.5em',
    justifyContent: theme_1.theme.justifyContent.sb
};
var EDIT_MODE_FALSE_TEXT_THEME = {
    alignItems: theme_1.theme.alignItems.center,
    margin: '0.5em 0 0 0',
    color: theme_1.theme.colors.grey,
    width: "100%",
    justifyContent: theme_1.theme.justifyContent.flexStart,
    fontSize: '0.9em'
};
var editModeTrue = function (setEditMode, userData) {
    return (<ProfileContentContainer_1.default>
            <InformationContent_tsx_1.default>
                <FlexBox_1.default style={FIRST_ROW_TITLE}>
                    <FlexBox_1.default>
                        Personal Information
                    </FlexBox_1.default>
                    <ProfilePrimaryButton_1.default onClick={function () { return setEditMode(false); }}>
                        Save
                    </ProfilePrimaryButton_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default theme={SECOND_ROW_THEME}>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                First Name
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder={userData.firstName}/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Last Name
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder={userData.lastName}/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                School Name
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder={'Nothing '}/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={{ justifyContent: 'center' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={{ width: '100%' }}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                About
                            </Text_1.default>
                            <textarea placeholder="Tell us about your skills and school" style={{ width: '100%', height: '10em' }}/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                </FlexBox_1.default>
            </InformationContent_tsx_1.default>
            <InformationContent_tsx_1.default style={{ marginTop: '1em' }}>
                <FlexBox_1.default style={FIRST_ROW_TITLE}>
                    Contact Information
                </FlexBox_1.default>
                <FlexBox_1.default theme={SECOND_ROW_THEME}>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Phone
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="7372173752"/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Email
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="email@gmail.com"/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                City
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="Austin"/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                State
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="Texas"/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                Street Address
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="2801 Wells Branch PKWY"/>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                Zip-Code
                            </Text_1.default>
                            <input style={INPUT_STYLE} type="text" placeholder="78728"/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                </FlexBox_1.default>            
            </InformationContent_tsx_1.default>
        </ProfileContentContainer_1.default>);
};
var editModeFalse = function (setEditMode, userData) {
    return (<ProfileContentContainer_1.default>
            <InformationContent_tsx_1.default>
                <FlexBox_1.default style={FIRST_ROW_TITLE}>
                    <FlexBox_1.default>
                        Personal Information
                    </FlexBox_1.default>
                    <EditIcon_1.default onClick={function () { return setEditMode(true); }}>
                        <i className="far fa-edit"></i>
                    </EditIcon_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default theme={SECOND_ROW_THEME}>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                First Name
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Nikita
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Last Name
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Krymov
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                School Name
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                ProTennis
                            </Text_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={{ justifyContent: 'center' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={{ width: '100%' }}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                About
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint libero necessitatibus, ut ducimus voluptates non error, eaque eos consequuntur similique numquam officiis? Vel voluptates deserunt beatae, nobis aut a.
                            </Text_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                </FlexBox_1.default>
            </InformationContent_tsx_1.default>
            <InformationContent_tsx_1.default style={{ marginTop: '1em' }}>
                <FlexBox_1.default style={FIRST_ROW_TITLE}>
                    Contact Information
                </FlexBox_1.default>
                <FlexBox_1.default theme={SECOND_ROW_THEME}>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Phone
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                727-217-3730
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                Email
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                email@email.com
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '0 0 0.3em 0' }}>
                                City
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Austin
                            </Text_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default theme={{ justifyContent: 'space-between' }}>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                State
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                Texas
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                Street Address
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                2801 Wells Branch PKWY
                            </Text_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={{ flexDirection: 'column' }} style={FLEX_TITLE_STYLE}>
                            <Text_1.default theme={SECOND_ROW_TITLE_THEME} style={{ margin: '2em 0 0.3em 0' }}>
                                Zip-Code
                            </Text_1.default>
                            <Text_1.default theme={EDIT_MODE_FALSE_TEXT_THEME}>
                                78728
                            </Text_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                </FlexBox_1.default>            
            </InformationContent_tsx_1.default>
        </ProfileContentContainer_1.default>);
};
var ProfileContent = function (props) {
    var _a = react_1.default.useState(false), editMode = _a[0], setEditMode = _a[1];
    if (editMode) {
        return editModeTrue(setEditMode, props.userData);
    }
    else {
        return editModeFalse(setEditMode, props.userData);
    }
};
var mapStateToProps = function (state) { return ({
    userData: state.app.userType
}); };
var mapDispatchToProps = function (dispatch) { return ({
    saveUserData: function () { return dispatch; }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ProfileContent);
