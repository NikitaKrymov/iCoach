import styled from 'styled-components';
import { theme } from '../../../../theme';

export default styled.div`
    display: flex;
    font-size: 1.2em;
    height: 2em;
    align-items: center;
    padding: 0.1em 1em 0.1em 1em;
    font-family: 'Cambria';
    border-radius: 0 0.5em 0 0;
    border-bottom: 1px solid lightgrey;
    justify-content: space-between;
    background-color: ${theme.colors.mainLightGrey};
`