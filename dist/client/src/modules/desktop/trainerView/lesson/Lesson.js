"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var PrimaryButton_1 = __importDefault(require("../../../../elements/desktop/commonElements/PrimaryButton"));
var BlockItem_1 = __importDefault(require("../../../../elements/desktop/lessonElements/BlockItem"));
var BlocksContainer_1 = __importDefault(require("../../../../elements/desktop/lessonElements/BlocksContainer"));
var LessonContainer_1 = __importDefault(require("../../../../elements/desktop/lessonElements/LessonContainer"));
var LessonContentContainer_1 = __importDefault(require("../../../../elements/desktop/lessonElements/LessonContentContainer"));
var SettingsInput_1 = __importDefault(require("../../../../elements/desktop/settingsElements/SettingsInput"));
var theme_1 = require("../../../../theme");
var Icon_1 = __importDefault(require("../../../../elements/desktop/commonElements/Icon"));
var history_1 = __importDefault(require("../../../../history"));
var BlockText_1 = __importDefault(require("./blocks/BlockText"));
var BlockAudio_1 = __importDefault(require("./blocks/BlockAudio"));
var BlockVideo_1 = __importDefault(require("./blocks/BlockVideo"));
var BlockImage_1 = __importDefault(require("./blocks/BlockImage"));
var Spinner_1 = __importDefault(require("../../../../elements/desktop/Spinner"));
require("../../../../css/main.css");
var LEFT_COLUMN_LESSON_CONTAINER = {
    flexDirection: theme_1.theme.flexDirection.column
};
var LESSON_TITLE_THEME = {
    justifyContent: theme_1.theme.justifyContent.sb,
    alignItems: theme_1.theme.alignItems.center,
};
var SAVE_BUTTON_THEME = {
    color: theme_1.theme.colors.white,
    hoverBackgroundColor: theme_1.theme.colors.white,
};
var BLOCKS_THEME = {
    flexWrap: theme_1.theme.flexWrap.wrap,
    justifyContent: theme_1.theme.justifyContent.center,
};
var BLOCK_CONTENT_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center
};
var SELECTED_BLOCK_CONTENT_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center,
    backgroundColor: theme_1.theme.colors.blue,
};
var BACK_ARROW_THEME = {
    justifyContent: theme_1.theme.justifyContent.flexStart,
    margin: '0.5em',
    fontSize: '1.5em'
};
var BLOCKS = [
    {
        type: 'TEXT',
    },
    {
        type: 'AUDIO'
    },
    {
        type: 'VIDEO'
    },
    {
        type: 'IMAGE'
    },
    {
        type: 'TEXT',
    },
    {
        type: 'AUDIO'
    },
    {
        type: 'VIDEO'
    },
    {
        type: 'IMAGE'
    }
];
var isLessonLoading = false;
var BLOCK_MENU = [
    {
        id: 1,
        type: "TEXT",
        title: "Text",
    },
    {
        id: 2,
        type: "VIDEO",
        title: "Video",
    },
    {
        id: 3,
        type: "AUDIO",
        title: "Audio",
    },
    {
        id: 4,
        type: "IMAGE",
        title: "Image",
    }
];
var renderBlockMenu = function (blockId, setBlockId) {
    return BLOCK_MENU.map(function (block) {
        return (<BlockItem_1.default onClick={function () { return setBlockId(block.id); }} theme={block.id !== blockId ? BLOCK_CONTENT_THEME : SELECTED_BLOCK_CONTENT_THEME}>
                <FlexBox_1.default theme={BLOCK_CONTENT_THEME} style={{ height: '100%' }}>
                    {block.title}
                </FlexBox_1.default>
            </BlockItem_1.default>);
    });
};
var LessonComponent = function (props) {
    var _a = react_1.useState(0), blockId = _a[0], setBlockId = _a[1];
    if (isLessonLoading) {
        return (<Spinner_1.default className="spinner"/>);
    }
    else {
        console.log(props.location);
        return (<LessonContainer_1.default className="hideScrollbar">
                <FlexBox_1.default theme={LEFT_COLUMN_LESSON_CONTAINER}>
                    <FlexBox_1.default theme={LESSON_TITLE_THEME} style={{ height: '3em' }}>
                        <FlexBox_1.default theme={BACK_ARROW_THEME} onClick={function () { return history_1.default.goBack(); }}>
                            <Icon_1.default>
                                <i className="fas fa-chevron-left"></i>
                            </Icon_1.default>
                        </FlexBox_1.default>
                        <SettingsInput_1.default placeholder="Current Lesson Name" value={props.location.state.title}/>
                        <PrimaryButton_1.default theme={SAVE_BUTTON_THEME}>
                                Save
                        </PrimaryButton_1.default>
                    </FlexBox_1.default>
                    <LessonContentContainer_1.default>
                        <FlexBox_1.default style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                            Create a lesson content by selecting and adding the content blocks
                        </FlexBox_1.default>
                        {BLOCKS.map(function (block, i) {
                switch (block.type) {
                    case 'TEXT':
                        return <BlockText_1.default />;
                    case 'AUDIO':
                        return <BlockAudio_1.default />;
                    case 'VIDEO':
                        return <BlockVideo_1.default />;
                    case 'IMAGE':
                        return <BlockImage_1.default />;
                    default:
                        return (<FlexBox_1.default style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                                            Create a lesson content by selecting and adding the content blocks
                                        </FlexBox_1.default>);
                }
            })}
                    </LessonContentContainer_1.default>
                </FlexBox_1.default>
                <FlexBox_1.default>
                    <BlocksContainer_1.default>
                        <FlexBox_1.default style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                            Select the Block you want to add to your lesson
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={BLOCKS_THEME} style={{ marginTop: '1em' }}>
                            {renderBlockMenu(blockId, setBlockId)}
                            <PrimaryButton_1.default theme={SAVE_BUTTON_THEME}>
                                    Add
                            </PrimaryButton_1.default>
                        </FlexBox_1.default>
                    </BlocksContainer_1.default>
                </FlexBox_1.default>
            </LessonContainer_1.default>);
    }
};
exports.default = LessonComponent;
