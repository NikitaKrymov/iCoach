import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    justify-content: ${props => props.theme.justifyContent};
    display: flex;
    align-items: ${props => props.theme.alignItems};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    box-shadow: 0 2px 3px black;
    padding: 0.5em 1em 0.5em 1em;
    margin: 1em;
    box-sizing: border-box;
    border-radius: 0.5em;
    :hover{
        cursor: pointer;
        box-shadow: 0 2px 5px black;
    }
`