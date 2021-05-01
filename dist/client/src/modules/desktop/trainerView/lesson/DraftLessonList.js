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
require("../../../../css/main.css");
var react_redux_1 = require("react-redux");
var LessonListContainer_1 = __importDefault(require("../../../../elements/desktop/lessonElements/LessonListContainer"));
var DraftLessonList = function (props) {
    var _a = react_1.useState(false), isDragging = _a[0], setDragging = _a[1];
    var _b = react_1.useState(props.draftLessons), lessonList = _b[0], setLessonList = _b[1];
    var _c = react_1.useState(-1), draggingItem = _c[0], setDraggingItem = _c[1];
    var _d = react_1.useState(null), draggingNode = _d[0], setDraggingNode = _d[1];
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
    var handleDragEnter = function (e) {
        console.log('Want to put this lesson to draft');
        console.log(e.target);
        // if (draggingNode !== e.currentTarget) {
        //     setLessonList((prevState: any) => {
        //         let newList = prevState;
        //         newList.push(e.target);
        //         return newList;
        //     })
        // } else {
        //     console.log('Match')
        // }
    };
    var handleDragEnd = function () {
        setDraggingItem(-1);
        setDraggingNode(null);
        setDragging(false);
        console.log('Need to rewrite array with the edited indexes');
    };
    if (props.isEditMode) {
        console.log(lessonList);
        return (<div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll' }}>
                <LessonListContainer_1.default onDragEnter={function (e) { return handleDragEnter(e.currentTarget); }} onDrop={function (e) { return console.log('This lesson is in draft now'); }}>
                    {/* {props.draftLessons.map((lesson, i) => {
                return(
                    <DraftLessonListElement
                        draggable
                        key={lesson.id}
                        onDragStart={(e) => handleDragStart(e, i)}
                        onDragEnd={() => handleDragEnd()}
                        style={{ border: isDragging ? getStyle(i) : 'none', cursor: 'move' }}
                    >
                        <FlexBox theme={{ justifyContent: 'center'}}>
                            <CheckBox />
                        </FlexBox>
                        <FlexBox>
                            {lesson.title}
                        </FlexBox>
                        <FlexBox>
                            <i className="fas fa-bars"></i>
                        </FlexBox>
                    </DraftLessonListElement>
                );
            })} */}
                </LessonListContainer_1.default>
            </div>);
    }
    else {
        return (<div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll' }}>
                <LessonListContainer_1.default>
                    {/* {props.draftLessons.map((lesson) => {
                return(
                    <DraftLessonListElement key={lesson.id}>
                        <FlexBox theme={{ justifyContent: 'center'}}>
                        </FlexBox>
                        <FlexBox>
                            {lesson.title}
                        </FlexBox>
                        <FlexBox>
                        </FlexBox>
                    </DraftLessonListElement>
                );
            })} */}
                </LessonListContainer_1.default>
            </div>);
    }
};
var mapStateToProps = function (state) { return ({
    draftLessons: state.app
}); };
exports.default = react_redux_1.connect(mapStateToProps)(DraftLessonList);
