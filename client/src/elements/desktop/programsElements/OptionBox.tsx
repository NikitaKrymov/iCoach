import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    width: 1.5em;
    height: 1.5em;
    background-color: grey;
    color: white;
    border-radius: 2em;
    margin: 0.5em;
    box-shadow: 0 1px 3px black;
    transition: 0.2s;
    :hover{
        cursor: pointer;
        background-color: ${theme.colors.blue};
        box-shadow: 0 2px 5px black;
        transition: 0.2s;
    }
`