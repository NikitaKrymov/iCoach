import React, { useState } from 'react';
import LessonListElement from '../../../../elements/desktop/lessonElements/LessonListElement';
import LessonListContainer from '../../../../elements/desktop/lessonElements/LessonListContainer';
import '../../../../css/main.css';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import CheckBox from '../../../../elements/desktop/commonElements/CheckBox';
import history from '../../../../history';
import { Lesson } from '../../../../../../interfaces/lessonInterfaces/Lesson';

interface OwnProps {
    isEditMode: boolean,
    lessons: Lesson[],
    courseId: string
}

type Props = OwnProps;

const LessonList: React.FC<Props> = (props) => {
    const [isDragging, setDragging] = useState(false);
    const [lessonList, setLessonList] = useState(props.lessons);
    const [draggingItem, setDraggingItem] = useState(-1);
    const [draggingNode, setDraggingNode] = useState(null);
    const [lessonEditList, setLessonEditList] = useState<string[]>([]);

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

    const handleDragEnter = (e: any, i: number) => {
        if (draggingNode !== e.currentTarget) {
            setLessonList((prevState: any) => {
                let newList = prevState;
                newList.splice(i, 0, newList.splice(draggingItem, 1)[0]);
                setDraggingItem(i);
                return newList;
            })
        } else {
            console.log('Match')
        }
    }

    const handleDragEnd = () => {
        setDraggingItem(-1);
        setDraggingNode(null);
        setDragging(false);
        console.log('Need to rewrite array with the edited indexes')
    }
    if (props.isEditMode){
        return(
        <div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll'}}>
            <LessonListContainer>
                {props.lessons.map((lesson: Lesson, i: number) => {
                    return (
                        <LessonListElement 
                            draggable 
                            key={lesson.id}
                            onDragStart={(e) => handleDragStart(e, i)}
                            onDragEnter={(e) => handleDragEnter(e, i)}
                            onDragOver={(e) => {e.preventDefault()}}
                            onDragEnd={() => handleDragEnd()}
                            style={{ border: isDragging ? getStyle(i) : 'none', cursor: 'move' }}
                        >  
                            <FlexBox theme={{ justifyContent: 'center', margin: '0 0.3em 0 0.3em' }}>
                                <CheckBox onChange={(e) => setLessonEditList([...lessonEditList, lesson.id])} />
                            </FlexBox>
                            <FlexBox>
                                {lesson.title}
                            </FlexBox>
                            <FlexBox style={{ marginRight: '1em' }}>
                                <i className="fas fa-bars"></i>
                            </FlexBox>
                        </LessonListElement>
                    );
                })}
            </LessonListContainer>
        </div>
        );
    } else {
        console.log(props.lessons)
        return(
            <div className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll'}}>
                <LessonListContainer>
                    {props.lessons.map((lesson: Lesson, i: number) => {
                        return (
                            <LessonListElement key={lesson.id} onClick={() => history.push({
                                pathname: `/programs/${props.courseId}/lesson/${lesson.id}`,
                                state: lesson
                            })}>   
                                <FlexBox>
                                </FlexBox>
                                <FlexBox theme={{ justifyContent: 'flex-start'}}>
                                    {lesson.title}
                                </FlexBox>
                                <FlexBox>
                                </FlexBox>
                            </LessonListElement>
                        );
                    })}
                </LessonListContainer>
            </div>
        );
    }
}


export default LessonList;