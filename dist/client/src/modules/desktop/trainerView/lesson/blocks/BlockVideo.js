"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BlockContainer_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/BlockContainer"));
var theme_1 = require("../../../../../theme");
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var Icon_1 = __importDefault(require("../../../../../elements/desktop/commonElements/Icon"));
var PrimaryButton_1 = __importDefault(require("../../../../../elements/desktop/commonElements/PrimaryButton"));
var SecondaryButton_1 = __importDefault(require("../../../../../elements/desktop/commonElements/SecondaryButton"));
var BlockImageContent_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/blockElements/BlockImageContent"));
var BlockDeleteButton_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/blockElements/BlockDeleteButton"));
var BlockOptionButton_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/blockElements/BlockOptionButton"));
var BAR_THEME = {
    alignItems: theme_1.theme.alignItems.center,
    justifyContent: theme_1.theme.justifyContent.center
};
var EDIT_THEME = {
    alignItems: theme_1.theme.alignItems.center,
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var SAVE_BUTTON_THEME = {
    color: theme_1.theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme_1.theme.colors.white,
    hoverColor: 'green',
    justifyContent: theme_1.theme.justifyContent.center,
};
var CANCEL_BUTTON_THEME = {
    color: theme_1.theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme_1.theme.colors.white,
    hoverColor: 'green',
    justifyContent: theme_1.theme.justifyContent.center,
};
var EDITMODE_CONTENT = {
    justifyContent: theme_1.theme.justifyContent.center,
    flexDirection: theme_1.theme.flexDirection.column,
};
var BLOCK_EDIT_OPTIONS = {
    justifyContent: theme_1.theme.justifyContent.sb
};
var BLOCK_EDIT_OPTIONS_FLEX_START = {
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var BLOCK_EDIT_OPTIONS_FLEX_END = {
    justifyContent: theme_1.theme.justifyContent.flexEnd
};
var BlockVideo = function (props) {
    var _a = react_1.default.useState(false), isDragging = _a[0], setDragging = _a[1];
    var _b = react_1.default.useState(false), editMode = _b[0], setEditMode = _b[1];
    if (editMode) {
        return (<BlockContainer_1.default>
                <Icon_1.default theme={EDIT_THEME} onClick={function () { return setEditMode(true); }}>
                    <i className="fas fa-pen"></i>
                </Icon_1.default>
                <FlexBox_1.default theme={EDITMODE_CONTENT} style={{ border: '1px solid grey' }}>
                    <FlexBox_1.default theme={BLOCK_EDIT_OPTIONS} style={{ borderBottom: '1px solid grey', padding: '0.5em' }}>
                        <FlexBox_1.default theme={BLOCK_EDIT_OPTIONS_FLEX_START}>
                            <BlockOptionButton_1.default onClick={function () { return console.log('Select a new video file'); }}>
                                Select File
                            </BlockOptionButton_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={BLOCK_EDIT_OPTIONS_FLEX_END}>
                            <BlockDeleteButton_1.default style={{ backgroundColor: '#c53a3a919' }}>
                                Delete Block
                            </BlockDeleteButton_1.default>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <FlexBox_1.default style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <BlockImageContent_1.default src="https://image.similarpng.com/thumbnail/2020/08/Youtube-player-video-Preumim-vector-PNG.png" alt="Video" style={{ width: '50%' }}/>
                    </FlexBox_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default theme={{ justifyContent: theme_1.theme.justifyContent.flexEnd, flexDirection: theme_1.theme.flexDirection.column }}>
                    <PrimaryButton_1.default onClick={function () { return setEditMode(false); }} theme={SAVE_BUTTON_THEME} style={{ marginBottom: '0', marginRight: '0', width: '5em' }}>
                            Save
                    </PrimaryButton_1.default>
                    <SecondaryButton_1.default onClick={function () { return setEditMode(false); }} theme={CANCEL_BUTTON_THEME} style={{ marginRight: '0', width: '5em' }}>
                            Cancel
                    </SecondaryButton_1.default>
                </FlexBox_1.default>
            </BlockContainer_1.default>);
    }
    else {
        return (<BlockContainer_1.default draggable onDragStart={function () { return setDragging(true); }} onDragOver={function (e) { return console.log(e.currentTarget); }} onDragEnd={function () { return setDragging(false); }} style={{
                border: isDragging ? '1px dashed grey' : 'none'
            }}>
                <Icon_1.default theme={EDIT_THEME} onClick={function () { return setEditMode(!editMode); }}>
                    <i className="fas fa-pen"></i>
                </Icon_1.default>
                <FlexBox_1.default style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <BlockImageContent_1.default src="https://image.similarpng.com/thumbnail/2020/08/Youtube-player-video-Preumim-vector-PNG.png" alt="Video" style={{ width: '50%' }}/>
                </FlexBox_1.default>
                <FlexBox_1.default theme={{ justifyContent: theme_1.theme.justifyContent.flexEnd }} style={{ height: '100%', cursor: 'grab' }}>
                    <FlexBox_1.default theme={BAR_THEME} style={{ background: 'grey', width: '1.5em', borderRadius: '0.2em' }}>
                        <i className="fas fa-bars"></i>
                    </FlexBox_1.default>
                </FlexBox_1.default>
            </BlockContainer_1.default>);
    }
};
exports.default = BlockVideo;
