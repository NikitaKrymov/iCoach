import React, { useState } from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import PrimaryButton from '../../../../elements/desktop/commonElements/PrimaryButton';
import BlockItem from '../../../../elements/desktop/lessonElements/BlockItem';
import BlocksContainer from '../../../../elements/desktop/lessonElements/BlocksContainer';
import LessonContainer from '../../../../elements/desktop/lessonElements/LessonContainer';
import LessonContentContainer from '../../../../elements/desktop/lessonElements/LessonContentContainer';
import SettingsInput from '../../../../elements/desktop/settingsElements/SettingsInput';
import { theme } from '../../../../theme';
import Icon from '../../../../elements/desktop/commonElements/Icon';
import history from '../../../../history';
import BlockText from './blocks/BlockText';
import BlockAudio from './blocks/BlockAudio';
import BlockVideo from './blocks/BlockVideo';
import BlockImage from './blocks/BlockImage';
import Spinner from '../../../../elements/desktop/Spinner';
import "../../../../css/main.css";
import { Lesson } from '../../../../../../interfaces/lessonInterfaces/Lesson';



const LEFT_COLUMN_LESSON_CONTAINER = {
    flexDirection: theme.flexDirection.column
}

const LESSON_TITLE_THEME = {
    justifyContent: theme.justifyContent.sb,
    alignItems: theme.alignItems.center,
}
const SAVE_BUTTON_THEME = {
    color: theme.colors.white,
    hoverBackgroundColor: theme.colors.white,
}
const BLOCKS_THEME= {
    flexWrap: theme.flexWrap.wrap,
    justifyContent: theme.justifyContent.center,
}
const BLOCK_CONTENT_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const SELECTED_BLOCK_CONTENT_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    backgroundColor: theme.colors.blue,
}

const BACK_ARROW_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    margin: '0.5em',
    fontSize: '1.5em'
}

const BLOCKS = [
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
]

const isLessonLoading = false;

const BLOCK_MENU = [
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
]


const renderBlockMenu = (blockId: number, setBlockId: React.Dispatch<React.SetStateAction<number>>) => {
    return BLOCK_MENU.map((block) => {
        return (
            <BlockItem onClick={() => setBlockId(block.id)} theme={ block.id !== blockId ? BLOCK_CONTENT_THEME : SELECTED_BLOCK_CONTENT_THEME }>
                <FlexBox theme={BLOCK_CONTENT_THEME} style={{ height: '100%'}}>
                    {block.title}
                </FlexBox>
            </BlockItem>
        );
    })
}

interface OwnProps {
    location: any,
    match: any
}

type Props = OwnProps;

const LessonComponent: React.FC<Props> = (props) => {

    const [blockId, setBlockId] = useState<number>(0);

    if (isLessonLoading) {
        return(
            <Spinner className="spinner" />
        );
    } else {
        console.log(props.location)
        return(
            <LessonContainer className="hideScrollbar">
                <FlexBox theme={LEFT_COLUMN_LESSON_CONTAINER}>
                    <FlexBox theme={LESSON_TITLE_THEME} style={{ height: '3em' }}>
                        <FlexBox theme={BACK_ARROW_THEME} onClick={() => history.goBack()}>
                            <Icon>
                                <i className="fas fa-chevron-left"></i>
                            </Icon>
                        </FlexBox>
                        <SettingsInput placeholder="Current Lesson Name" value={props.location.state.title}/>
                        <PrimaryButton theme={SAVE_BUTTON_THEME}>
                                Save
                        </PrimaryButton>
                    </FlexBox>
                    <LessonContentContainer>
                        <FlexBox style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                            Create a lesson content by selecting and adding the content blocks
                        </FlexBox>
                        {BLOCKS.map((block, i) => {
                            switch (block.type){
                                case 'TEXT':
                                    return <BlockText />
                                case 'AUDIO': 
                                    return <BlockAudio />
                                case 'VIDEO':
                                    return <BlockVideo />
                                case 'IMAGE':
                                    return <BlockImage />
                                default: 
                                    return(
                                        <FlexBox style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                                            Create a lesson content by selecting and adding the content blocks
                                        </FlexBox>
                                    );
                            }
                        })}
                    </LessonContentContainer>
                </FlexBox>
                <FlexBox>
                    <BlocksContainer>
                        <FlexBox style={{ textAlign: 'center', color: '#AAA', borderBottom: '1px solid #AAA', paddingBottom: '0.5em' }}>
                            Select the Block you want to add to your lesson
                        </FlexBox>
                        <FlexBox theme={BLOCKS_THEME} style={{ marginTop: '1em' }}>
                            {renderBlockMenu(blockId, setBlockId)}
                            <PrimaryButton theme={SAVE_BUTTON_THEME}>
                                    Add
                            </PrimaryButton>
                        </FlexBox>
                    </BlocksContainer>
                </FlexBox>
            </LessonContainer>
        );
    }
}

export default LessonComponent;