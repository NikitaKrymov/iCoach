import styled from 'styled-components';
import { theme } from '../../../../theme';

export default styled.div`
    display: flex;
    font-size: 1.2em;
    height: 2em;
    align-items: center;
    font-family: 'Cambria';
    padding: 0.1em 1em 0.1em 1em;
    background-color: ${theme.colors.mainLightGrey};
    border-radius: 0.5em 0 0 0;
    border-bottom: 1px solid lightgrey;
`