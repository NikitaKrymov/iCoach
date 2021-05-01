import styled from 'styled-components';
import { theme } from '../../../../theme';

export default styled.div`
    color: ${theme.colors.white};
    padding: 0.5em 1em 0.5em 1em;
    border-radius: 0.5em;
    box-shadow: 0 1px 3px grey;
    text-align: center;
    background: ${theme.colors.blue};
    :hover {
        box-shadow: 0 1px 3px black;
        cursor: pointer;
    }
`