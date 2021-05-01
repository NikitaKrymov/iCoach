import React, { useState } from 'react';
import BlockContainer from '../../../../../elements/desktop/lessonElements/BlockContainer';
import Text from '../../../../../elements/desktop/commonElements/Text';
import { theme } from '../../../../../theme';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import Icon from '../../../../../elements/desktop/commonElements/Icon';
import PrimaryButton from '../../../../../elements/desktop/commonElements/PrimaryButton';
import TextArea from '../../../../../elements/desktop/commonElements/TextArea';
import Select from '../../../../../elements/desktop/lessonElements/blockElements/Select';
import PositionIcon from '../../../../../elements/desktop/lessonElements/blockElements/PositionIcon';
import SecondaryButton from '../../../../../elements/desktop/commonElements/SecondaryButton';

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
const TEXT_EDIT_OPTIONS = {
    justifyContent: theme.justifyContent.flexStart
}

const TEXT_EDIT_OPTION_BLOCK = {
    margin: '0 0 0 1em'
}


const BlockText: React.FC = (props) => {
    const [isDragging, setDragging] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [color, setColor] = useState('black');
    const [position, setPosition] = useState('left');
    const [size, setSize] = useState('1em');
    const [font, setFont] = useState('Arial');
    
    if (editMode) {
        return(
            <BlockContainer>
                <Icon theme={EDIT_THEME} onClick={() => setEditMode(true)} style={{ marginRight: '0.5em' }}>
                    <i className="fas fa-pen"></i>
                </Icon>
                <FlexBox theme={EDITMODE_CONTENT} >
                    <FlexBox theme={ TEXT_EDIT_OPTIONS } style={{ border: '1px solid grey', borderBottom: 'none', padding: '0.5em' }}>
                        <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                            <Select defaultValue={font} onChange={(e) => setFont(e.target.value)}>
                                <option value={'Arial'}>
                                    Arial
                                </option>
                                <option value={'Century'}>
                                    Century
                                </option>
                                <option value={'Georgia'}>
                                    Georgia
                                </option>
                            </Select>
                        </FlexBox>
                        <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                            <Select defaultValue={size} onChange={(e) => setSize(e.target.value)}>
                                <option value={'0.7em'}>
                                    Small
                                </option>
                                <option value={'1em'} >
                                    Medium
                                </option>
                                <option value={'1.5em'}>
                                    Large
                                </option>
                            </Select>
                        </FlexBox>
                        <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                            <PositionIcon onClick={() => setPosition('left')} style={{ boxShadow: position === 'left' ? '0 1px 3px black' : 'none'}}>
                                <i className="fas fa-align-left"></i>
                            </PositionIcon>
                            <PositionIcon onClick={() => setPosition('center')} style={{ boxShadow: position === 'center' ? '0 1px 3px black' : 'none'}}>
                                <i className="fas fa-align-center"></i>
                            </PositionIcon>
                            <PositionIcon onClick={() => setPosition('right')} style={{ boxShadow: position === 'right' ? '0 1px 3px black' : 'none'}}>
                                <i className="fas fa-align-right"></i>
                            </PositionIcon>
                        </FlexBox>
                        <FlexBox theme={ TEXT_EDIT_OPTION_BLOCK }>
                            <input defaultValue={color} type="color" onChange={(e) => setColor(e.target.value)}/>
                        </FlexBox>
                    </FlexBox>
                    <TextArea>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                    </TextArea>
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
        console.log(position, color, font, size)
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
                <Icon theme={EDIT_THEME} onClick={() => setEditMode(!editMode)} style={{ marginRight: '1em' }}>
                    <i className="fas fa-pen"></i>
                </Icon>
                <Text theme={{ alignItems: theme.alignItems.center, textAlign: position}} style={{fontSize: `${size}`, color: `${color}`, fontFamily: `${font}`   }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corporis harum cumque? Iure facere esse veniam autem quibusdam nostrum, ea odit natus minima! Fugiat pariatur ratione maxime quaerat sapiente dolor?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat, culpa sit fugit harum enim aperiam accusamus vitae quasi et id, quisquam voluptas ipsa praesentium, eos sequi corrupti ea commodi.
                </Text>
                <FlexBox theme={{ justifyContent: theme.justifyContent.flexEnd }} style={{ height: '100%', cursor: 'grab' }}>
                    <FlexBox theme={BAR_THEME} style={{ background: 'grey', width: '1.5em', borderRadius: '0.2em' }}>
                        <i className="fas fa-bars"></i>
                    </FlexBox>
                </FlexBox>
            </BlockContainer>
        );
    }
}

export default BlockText;