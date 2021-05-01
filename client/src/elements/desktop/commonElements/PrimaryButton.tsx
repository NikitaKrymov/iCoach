import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    justify-content: ${props => props.theme.justifyContent};
    display: flex;
    align-items: ${props => props.theme.alignItems};
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    box-shadow: 0 1px 3px black;
    padding: 0.5em 1em 0.5em 1em;
    margin: 1em;
    border-radius: 0.5em;
    box-sizing: border-box;
    :hover{
        background-color: ${theme.colors.mainBlue};
        color: ${theme.colors.white};
        cursor: pointer;
    }
`