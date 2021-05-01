import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    overflow-y: auto;
    background: ${theme.colors.white};
    margin: 0.5em;
    border-radius: 0.2em;
    box-shadow: 0 2px 3px grey;
    :hover {
        cursor: pointer;
    }
`