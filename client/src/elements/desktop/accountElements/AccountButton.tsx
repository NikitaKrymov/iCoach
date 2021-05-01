import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    color: ${theme.colors.default};
    padding: 0.3em;
    display: flex;
    justify-content: center;
    border-radius: 0.3em;
    font-size: 2em;
    color: ${theme.colors.primary};
    :hover {
        //color: ${theme.colors.primary};
        color: rgb(0, 87, 158);
        cursor: pointer;
    }
`