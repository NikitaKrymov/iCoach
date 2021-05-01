import styled from 'styled-components';
import { theme } from '../../../../theme';

export default styled.div`
    border-radius: 0.2em;
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    height: 34em;
    margin-right: 0.5em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    box-shadow: 0 0 2px grey;
    background-color: ${theme.colors.white};
`