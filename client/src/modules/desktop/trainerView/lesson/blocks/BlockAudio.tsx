import React from 'react';
import BlockContainer from '../../../../../elements/desktop/lessonElements/BlockContainer';
import { theme } from '../../../../../theme';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import Icon from '../../../../../elements/desktop/commonElements/Icon';
import PrimaryButton from '../../../../../elements/desktop/commonElements/PrimaryButton';
import SecondaryButton from '../../../../../elements/desktop/commonElements/SecondaryButton';
import BlockImageContent from '../../../../../elements/desktop/lessonElements/blockElements/BlockImageContent';
import BlockOptionButton from '../../../../../elements/desktop/lessonElements/blockElements/BlockOptionButton';
import BlockDeleteButton from '../../../../../elements/desktop/lessonElements/blockElements/BlockDeleteButton';

const BAR_THEME = {
    alignItems: theme.alignItems.center,
    justifyContent: theme.justifyContent.center
}
const EDIT_THEME = {
    alignItems: theme.alignItems.center,
    justifyContent: theme.justifyContent.flexStart
}
const SAVE_BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme.colors.white,
    hoverColor: 'green',
    justifyContent: theme.justifyContent.center,
}
const CANCEL_BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: 'green',
    hoverBackgroundColor: theme.colors.white,
    hoverColor: 'green',
    justifyContent: theme.justifyContent.center,

}
const EDITMODE_CONTENT = {
    justifyContent: theme.justifyContent.center,
    flexDirection: theme.flexDirection.column,
}
const BLOCK_EDIT_OPTIONS = {
    justifyContent: theme.justifyContent.sb
}


const BLOCK_EDIT_OPTIONS_FLEX_START = {
    justifyContent: theme.justifyContent.flexStart
}

const BLOCK_EDIT_OPTIONS_FLEX_END = {
    justifyContent: theme.justifyContent.flexEnd

}


const BlockAudio: React.FC = (props) => {
    const [isDragging, setDragging] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    
    if (editMode) {
        return(
            <BlockContainer>
                <Icon theme={EDIT_THEME} onClick={() => setEditMode(true)}>
                    <i className="fas fa-pen"></i>
                </Icon>
                <FlexBox theme={EDITMODE_CONTENT} style={{border: '1px solid grey'}}>
                    <FlexBox theme={ BLOCK_EDIT_OPTIONS } style={{ borderBottom: '1px solid grey', padding: '0.5em' }}>
                        <FlexBox theme={BLOCK_EDIT_OPTIONS_FLEX_START}>
                            <BlockOptionButton onClick={() => console.log('Select a new audio file')}>
                                Select File
                            </BlockOptionButton>
                        </FlexBox>
                        <FlexBox theme={BLOCK_EDIT_OPTIONS_FLEX_END}>
                        <BlockDeleteButton style={{ backgroundColor: '#c53a3a919'}}>
                            Delete Block
                        </BlockDeleteButton>
                    </FlexBox>
                    </FlexBox>
                    <FlexBox style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <BlockImageContent src="https://authorguide.learnosity.com/hc/article_attachments/360001732597/simpleft4.png" alt="Audio Track" />
                    </FlexBox>
                </FlexBox>
                <FlexBox theme={{ justifyContent: theme.justifyContent.flexEnd, flexDirection: theme.flexDirection.column }}>
                    <PrimaryButton onClick={() => setEditMode(false)} theme={SAVE_BUTTON_THEME} style={{ marginBottom: '0', marginRight: '0', width: '5em'}}>
                            Save
                    </PrimaryButton>
                    <SecondaryButton onClick={() => setEditMode(false) }theme={CANCEL_BUTTON_THEME} style={{ marginRight: '0', width: '5em'}}>
                            Cancel
                    </SecondaryButton>
                </FlexBox>
            </BlockContainer>
        );
    } else {
        return(
            <BlockContainer
                draggable
                onDragStart={() => setDragging(true)}
                onDragOver = {(e) => console.log(e.currentTarget)}
                onDragEnd = {() => setDragging(false)}
                style={{
                    border: isDragging ? '1px dashed grey' : 'none'
                }}
            >
                <Icon theme={EDIT_THEME} onClick={() => setEditMode(!editMode)}>
                    <i className="fas fa-pen"></i>
                </Icon>
                <FlexBox style={{ justifyContent: 'center', alignItems: 'center', padding: '0 0.5em 0 0.5em' }}>
                    <BlockImageContent src="https://authorguide.learnosity.com/hc/article_attachments/360001732597/simpleft4.png" alt="Audio Track" />
                </FlexBox>
                <FlexBox theme={{ justifyContent: theme.justifyContent.flexEnd }} style={{ height: '100%', cursor: 'grab' }}>
                    <FlexBox theme={BAR_THEME} style={{ background: 'grey', width: '1.5em', borderRadius: '0.2em' }}>
                        <i className="fas fa-bars"></i>
                    </FlexBox>
                </FlexBox>
            </BlockContainer>
        );
    }
}

export default BlockAudio;