import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    font-size: 1.5em;
    color: ${theme.colors.default};
    margin: 0.5em;
    :hover {
        color: ${theme.colors.primary};
        cursor: pointer;
    }
`