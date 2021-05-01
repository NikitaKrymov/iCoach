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
var BlockContainer_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/BlockContainer"));
var Text_1 = __importDefault(require("../../../../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../../../../theme");
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var Icon_1 = __importDefault(require("../../../../../elements/desktop/commonElements/Icon"));
var PrimaryButton_1 = __importDefault(require("../../../../../elements/desktop/commonElements/PrimaryButton"));
var TextArea_1 = __importDefault(require("../../../../../elements/desktop/commonElements/TextArea"));
var Select_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/blockElements/Select"));
var PositionIcon_1 = __importDefault(require("../../../../../elements/desktop/lessonElements/blockElements/PositionIcon"));
var SecondaryButton_1 = __importDefault(require("../../../../../elements/desktop/commonElements/SecondaryButton"));
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
var TEXT_EDIT_OPTIONS = {
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var TEXT_EDIT_OPTION_BLOCK = {
    margin: '0 0 0 1em'
};
var BlockText = function (props) {
    var _a = react_1.default.useState(false), isDragging = _a[0], setDragging = _a[1];
    var _b = react_1.default.useState(false), editMode = _b[0], setEditMode = _b[1];
    var _c = react_1.useState('black'), color = _c[0], setColor = _c[1];
    var _d = react_1.useState('left'), position = _d[0], setPosition = _d[1];
    var _e = react_1.useState('1em'), size = _e[0], setSize = _e[1];
    var _f = react_1.useState('Arial'), font = _f[0], setFont = _f[1];
    if (editMode) {
        return (<BlockContainer_1.default>
                <Icon_1.default theme={EDIT_THEME} onClick={function () { return setEditMode(true); }} style={{ marginRight: '0.5em' }}>
                    <i className="fas fa-pen"></i>
                </Icon_1.default>
                <FlexBox_1.default theme={EDITMODE_CONTENT}>
                    <FlexBox_1.default theme={TEXT_EDIT_OPTIONS} style={{ border: '1px solid grey', borderBottom: 'none', padding: '0.5em' }}>
                        <FlexBox_1.default theme={TEXT_EDIT_OPTION_BLOCK}>
                            <Select_1.default defaultValue={font} onChange={function (e) { return setFont(e.target.value); }}>
                                <option value={'Arial'}>
                                    Arial
                                </option>
                                <option value={'Century'}>
                                    Century
                                </option>
                                <option value={'Georgia'}>
                                    Georgia
                                </option>
                            </Select_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={TEXT_EDIT_OPTION_BLOCK}>
                            <Select_1.default defaultValue={size} onChange={function (e) { return setSize(e.target.value); }}>
                                <option value={'0.7em'}>
                                    Small
                                </option>
                                <option value={'1em'}>
                                    Medium
                                </option>
                                <option value={'1.5em'}>
                                    Large
                                </option>
                            </Select_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={TEXT_EDIT_OPTION_BLOCK}>
                            <PositionIcon_1.default onClick={function () { return setPosition('left'); }} style={{ boxShadow: position === 'left' ? '0 1px 3px black' : 'none' }}>
                                <i className="fas fa-align-left"></i>
                            </PositionIcon_1.default>
                            <PositionIcon_1.default onClick={function () { return setPosition('center'); }} style={{ boxShadow: position === 'center' ? '0 1px 3px black' : 'none' }}>
                                <i className="fas fa-align-center"></i>
                            </PositionIcon_1.default>
                            <PositionIcon_1.default onClick={function () { return setPosition('right'); }} style={{ boxShadow: position === 'right' ? '0 1px 3px black' : 'none' }}>
                                <i className="fas fa-align-right"></i>
                            </PositionIcon_1.default>
                        </FlexBox_1.default>
                        <FlexBox_1.default theme={TEXT_EDIT_OPTION_BLOCK}>
                            <input defaultValue={color} type="color" onChange={function (e) { return setColor(e.target.value); }}/>
                        </FlexBox_1.default>
                    </FlexBox_1.default>
                    <TextArea_1.default>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                    </TextArea_1.default>
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
        console.log(position, color, font, size);
        return (<BlockContainer_1.default draggable onDragStart={function () { return setDragging(true); }} onDragOver={function (e) { return console.log(e.currentTarget); }} onDragEnd={function () { return setDragging(false); }} style={{
                border: isDragging ? '1px dashed grey' : 'none'
            }}>
                <Icon_1.default theme={EDIT_THEME} onClick={function () { return setEditMode(!editMode); }} style={{ marginRight: '1em' }}>
                    <i className="fas fa-pen"></i>
                </Icon_1.default>
                <Text_1.default theme={{ alignItems: theme_1.theme.alignItems.center, textAlign: position }} style={{ fontSize: "" + size, color: "" + color, fontFamily: "" + font }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corporis harum cumque? Iure facere esse veniam autem quibusdam nostrum, ea odit natus minima! Fugiat pariatur ratione maxime quaerat sapiente dolor?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                </Text_1.default>
                <FlexBox_1.default theme={{ justifyContent: theme_1.theme.justifyContent.flexEnd }} style={{ height: '100%', cursor: 'grab' }}>
                    <FlexBox_1.default theme={BAR_THEME} style={{ background: 'grey', width: '1.5em', borderRadius: '0.2em' }}>
                        <i className="fas fa-bars"></i>
                    </FlexBox_1.default>
                </FlexBox_1.default>
            </BlockContainer_1.default>);
    }
};
exports.default = BlockText;
