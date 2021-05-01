import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: 16em;
    height: 16em;
    border-radius: 0.2em;
    box-shadow: 1px 1px 5px black;
    transition: 0.1s;
    display: grid;
    background-color: ${theme.colors.white};
    grid-template-rows: 2fr 1fr;
    :hover {
        transition: 0.1s;
        box-shadow: 1px 1px 10px black;
        cursor: pointer;
    }
`