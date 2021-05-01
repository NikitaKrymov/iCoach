import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.circle.attrs({
    r: '3em',
    stroke: 'black',
    strokeWidth: '10px',
    fill: 'transparent',
    cx: "5em",
    cy: "5em"
})`
    color: ${theme.colors.primary};
    font-size: 2em;
    transition: 0.5s;
    transform: rotate(-90deg);
`