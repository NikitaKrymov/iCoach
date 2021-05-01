import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    height: 2em;
    color: ${theme.colors.default};
    border-radius: 0.5em 0.5em 0 0;
    display: flex;
    font-size: 1.1em;
    padding: 0.1em 1em 0.1em 1em;
    justify-content: space-between;
    background-color: ${theme.colors.mainLightGrey};
    align-items: center;
`