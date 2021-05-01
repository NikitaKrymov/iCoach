import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: 25em;
    height: 15em;
    border-radius: 0.5em;
    box-shadow: 1px 1px 5px black;
    padding: 0.5em;
    margin: 1em;
    transition: 0.1s;
    background-color: ${theme.colors.secondary};
    :hover {
        transition: 0.1s;
        box-shadow: 1px 1px 10px black;
        cursor: pointer;
    }
`