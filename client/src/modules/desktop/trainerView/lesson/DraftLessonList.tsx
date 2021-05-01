import React, { useState } from 'react';
import "../../../../css/main.css";
import { connect } from 'react-redux';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import CheckBox from '../../../../elements/desktop/commonElements/CheckBox';
import LessonListContainer from '../../../../elements/desktop/lessonElements/LessonListContainer';
import DraftLessonListElement from '../../../../elements/desktop/lessonElements/DraftLessonListElement';
import { AppState } from '../../../../reducers/rootReducer';

interface OwnProps {
    isEditMode: boolean
}

type Props = OwnProps & MapStateToProps;

const DraftLessonList: React.FC<Props> = (props) => {

    const [isDragging, setDragging] = useState(false);
    const [lessonList, setLessonList] = useState(props.draftLessons);
    const [draggingItem, setDraggingItem] = useState(-1);
    const [draggingNode, setDraggingNode] = useState(null);

    const getStyle = (i: number) => {
        if (draggingItem === i) {
            return '1px dashed grey'
        }
    }

    const handleDragStart = (e: any, i: number) => {
        setDragging(true);
        setDraggingNode(e.currentTarget);
        setDraggingItem(i);
    }

    const handleDragEnter = (e: any) => {
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
    }

    const handleDragEnd = () => {
        setDraggingItem(-1);
        setDraggingNode(null);
        setDragging(false);
        console.log('Need to rewrite array with the edited indexes')
    }


    if(props.isEditMode){
        console.log(lessonList)
        return(
            <div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll'}}>
                <LessonListContainer
                    onDragEnter={(e) => handleDragEnter(e.currentTarget)}
                    onDrop={(e) => console.log('This lesson is in draft now')}
                >
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
                </LessonListContainer>
            </div>
        );
    } else {
        return(
            <div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll'}}>
                <LessonListContainer>
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
                </LessonListContainer>
            </div>
        );
    }
}

interface MapStateToProps {
    draftLessons: any
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    draftLessons: state.app
})

export default connect(mapStateToProps)(DraftLessonList);