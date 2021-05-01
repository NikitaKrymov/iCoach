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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var LessonListElement_1 = __importDefault(require("../../../../elements/desktop/lessonElements/LessonListElement"));
var LessonListContainer_1 = __importDefault(require("../../../../elements/desktop/lessonElements/LessonListContainer"));
require("../../../../css/main.css");
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var CheckBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/CheckBox"));
var history_1 = __importDefault(require("../../../../history"));
var LessonList = function (props) {
    var _a = react_1.useState(false), isDragging = _a[0], setDragging = _a[1];
    var _b = react_1.useState(props.lessons), lessonList = _b[0], setLessonList = _b[1];
    var _c = react_1.useState(-1), draggingItem = _c[0], setDraggingItem = _c[1];
    var _d = react_1.useState(null), draggingNode = _d[0], setDraggingNode = _d[1];
    var _e = react_1.useState([]), lessonEditList = _e[0], setLessonEditList = _e[1];
    var getStyle = function (i) {
        if (draggingItem === i) {
            return '1px dashed grey';
        }
    };
    var handleDragStart = function (e, i) {
        setDragging(true);
        setDraggingNode(e.currentTarget);
        setDraggingItem(i);
    };
    var handleDragEnter = function (e, i) {
        if (draggingNode !== e.currentTarget) {
            setLessonList(function (prevState) {
                var newList = prevState;
                newList.splice(i, 0, newList.splice(draggingItem, 1)[0]);
                setDraggingItem(i);
                return newList;
            });
        }
        else {
            console.log('Match');
        }
    };
    var handleDragEnd = function () {
        setDraggingItem(-1);
        setDraggingNode(null);
        setDragging(false);
        console.log('Need to rewrite array with the edited indexes');
    };
    if (props.isEditMode) {
        return (<div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll' }}>
            <LessonListContainer_1.default>
                {props.lessons.map(function (lesson, i) {
                return (<LessonListElement_1.default draggable key={lesson.id} onDragStart={function (e) { return handleDragStart(e, i); }} onDragEnter={function (e) { return handleDragEnter(e, i); }} onDragOver={function (e) { e.preventDefault(); }} onDragEnd={function () { return handleDragEnd(); }} style={{ border: isDragging ? getStyle(i) : 'none', cursor: 'move' }}>  
                            <FlexBox_1.default theme={{ justifyContent: 'center', margin: '0 0.3em 0 0.3em' }}>
                                <CheckBox_1.default onChange={function (e) { return setLessonEditList(__spreadArray(__spreadArray([], lessonEditList), [lesson.id])); }}/>
                            </FlexBox_1.default>
                            <FlexBox_1.default>
                                {lesson.title}
                            </FlexBox_1.default>
                            <FlexBox_1.default style={{ marginRight: '1em' }}>
                                <i className="fas fa-bars"></i>
                            </FlexBox_1.default>
                        </LessonListElement_1.default>);
            })}
            </LessonListContainer_1.default>
        </div>);
    }
    else {
        console.log(props.lessons);
        return (<div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll' }}>
                <LessonListContainer_1.default>
                    {props.lessons.map(function (lesson, i) {
                return (<LessonListElement_1.default key={lesson.id} onClick={function () { return history_1.default.push({
                        pathname: "/programs/" + props.courseId + "/" + lesson.id,
                        state: lesson
                    }); }}>   
                                <FlexBox_1.default>
                                </FlexBox_1.default>
                                <FlexBox_1.default theme={{ justifyContent: 'flex-start' }}>
                                    {lesson.title}
                                </FlexBox_1.default>
                                <FlexBox_1.default>
                                </FlexBox_1.default>
                            </LessonListElement_1.default>);
            })}
                </LessonListContainer_1.default>
            </div>);
    }
};
exports.default = LessonList;
