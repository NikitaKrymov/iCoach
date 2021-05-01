import React from 'react';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import { theme } from '../../../../../theme';
import Text from '../../../../../elements/desktop/commonElements/Text';
import CircleContainer from '../../../../../elements/desktop/dashboardElements/UsersBlock/CircleContainer';


const CIRCLE_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column
}

const CIRCLE_TITLE_THEME = {
    color: theme.colors.default,
    fontSize: '2em',
    margin: '0 1em 0 1em',
}

const INSIDE_CIRCLE_TEXT_THEME = {
    color: theme.colors.default,
    fontSize: '2.5em',
    justifyContent: theme.justifyContent.center
}

interface Props {
    percentage: number,
    label: string,
    title: string,
    circleColor: string
}

const CircleData: React.FC<Props> = (props) => {
    
    const circleRadius = 4;
    const circleLength = 3.141592653589793 * 4 * 2;
    const progress = circleLength * (1-props.percentage/100);

    return(
        <FlexBox theme={CIRCLE_THEME}>
            <Text theme={CIRCLE_TITLE_THEME}>
                {props.title} TEST
            </Text>
            <Text style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'absolute', marginTop: '2.3em' }}><FlexBox theme={INSIDE_CIRCLE_TEXT_THEME}>{props.label}</FlexBox> </Text>
            <CircleContainer>
                <circle r={`${circleRadius}em`} stroke={theme.colors.lightGrey} stroke-width="8px" fill="transparent" cx="5em" cy="5em" strokeDasharray={`${circleLength}em`} strokeDashoffset='0' />
                <circle r={`${circleRadius}em`} stroke={props.circleColor} stroke-width="8px" fill="transparent" cx="5em" cy="5em" strokeDasharray={`${circleLength}em`} strokeDashoffset={`${progress}em`} />
                {/* <text transform="rotate(-90deg)" x="5em" y="5em" text-anchor="middle" stroke={theme.colors.primary} stroke-width="1px" dy=".3em">25</text> */}
            </CircleContainer>
        </FlexBox>
    );
}

export default CircleData;