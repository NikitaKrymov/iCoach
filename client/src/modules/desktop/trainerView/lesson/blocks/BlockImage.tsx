import React, { useState } from 'react';
import BlockContainer from '../../../../../elements/desktop/lessonElements/BlockContainer';
import { theme } from '../../../../../theme';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import Icon from '../../../../../elements/desktop/commonElements/Icon';
import PrimaryButton from '../../../../../elements/desktop/commonElements/PrimaryButton';
import Select from '../../../../../elements/desktop/lessonElements/blockElements/Select';
import PositionIcon from '../../../../../elements/desktop/lessonElements/blockElements/PositionIcon';
import SecondaryButton from '../../../../../elements/desktop/commonElements/SecondaryButton';
import BlockImageContent from '../../../../../elements/desktop/lessonElements/blockElements/BlockImageContent';
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

const TEXT_EDIT_OPTION_BLOCK = {
    margin: '0 0 0 1em'
}


const BlockImage: React.FC = (props) => {
    const [isDragging, setDragging] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [position, setPosition] = useState('center');
    const [size, setSize] = useState('50%');
    
    if (editMode) {
        return(
            <BlockContainer>
                <Icon theme={EDIT_THEME} onClick={() => setEditMode(true)}>
                    <i className="fas fa-pen"></i>
                </Icon>
                <FlexBox theme={EDITMODE_CONTENT} style={{border: '1px solid grey'}}>
                    <FlexBox theme={ BLOCK_EDIT_OPTIONS } style={{ borderBottom: '1px solid grey', padding: '0.5em' }}>
                        <FlexBox theme= {BLOCK_EDIT_OPTIONS_FLEX_START}>
                            <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                                <Select defaultValue={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value={'25%'}>
                                        Small
                                    </option>
                                    <option value={'50%'} >
                                        Medium
                                    </option>
                                    <option value={'100%'} >
                                        Large
                                    </option>
                                </Select>
                            </FlexBox>
                            <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                                <PositionIcon onClick={() => setPosition('flex-start')} style={{ boxShadow: position === 'left' ? '0 1px 3px black' : 'none'}}>
                                    <i className="fas fa-align-left"></i>
                                </PositionIcon>
                                <PositionIcon onClick={() => setPosition('center')} style={{ boxShadow: position === 'center' ? '0 1px 3px black' : 'none'}}>
                                    <i className="fas fa-align-center"></i>
                                </PositionIcon>
                                <PositionIcon onClick={() => setPosition('flex-end')} style={{ boxShadow: position === 'right' ? '0 1px 3px black' : 'none'}}>
                                    <i className="fas fa-align-right"></i>
                                </PositionIcon>
                            </FlexBox>
                        </FlexBox>
                        <FlexBox theme={BLOCK_EDIT_OPTIONS_FLEX_END}>
                            <BlockDeleteButton style={{ backgroundColor: '#c53a3a919'}}>
                                Delete Block
                            </BlockDeleteButton>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox style={{ justifyContent: `${position}`, alignItems: 'center' }}>
                        <BlockImageContent src="https://static.toiimg.com/photo/72975551.cms" alt="Image" style={{ width: `${size}` }}/>
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
                <FlexBox style={{ justifyContent: `${position}`, alignItems: 'center' }}>
                    <BlockImageContent src="https://static.toiimg.com/photo/72975551.cms" alt="Image" style={{ width: `${size}` }}/>
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

export default BlockImage;