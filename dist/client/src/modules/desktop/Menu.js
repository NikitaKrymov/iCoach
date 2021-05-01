"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../elements/desktop/commonElements/FlexBox"));
var MenuElement_1 = __importDefault(require("../../elements/desktop/menuElements/MenuElement"));
var history_1 = __importDefault(require("../../history"));
var Text_1 = __importDefault(require("../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../theme");
var TRAINER_MENU_ELEMENTS = [
    {
        label: 'Dashboard',
        icon: 'fas fa-book',
        id: 1,
        path: '/'
    },
    {
        label: 'Programs',
        icon: 'fas fa-user-friends',
        id: 2,
        path: '/programs'
    },
    {
        label: 'Clients',
        icon: 'fas fa-headset',
        id: 3,
        path: '/clients'
    },
    {
        label: 'Support',
        icon: 'fas fa-headset',
        id: 4,
        path: '/support'
    },
];
var FLEXBOX_THEME = {
    flexDirection: theme_1.theme.flexDirection.column,
    margin: '1em 0 0 0'
};
var Menu = function () {
    var _a = react_1.default.useState(1), tab = _a[0], setTab = _a[1];
    return (<FlexBox_1.default theme={FLEXBOX_THEME}>
            {TRAINER_MENU_ELEMENTS.map(function (element, i) {
            return (<MenuElement_1.default style={{ backgroundColor: element.id === tab ? theme_1.theme.colors.mainGrey : theme_1.theme.colors.mainBlue, color: element.id === tab ? theme_1.theme.colors.mainBlue : theme_1.theme.colors.white }} onClick={function () { setTab(element.id); history_1.default.push("" + element.path); }}>
                        <Text_1.default style={{ fontSize: '1.3em' }}>
                            {element.label} 
                        </Text_1.default>
                    </MenuElement_1.default>);
        })}
        </FlexBox_1.default>);
};
exports.default = Menu;
