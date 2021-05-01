import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: flex-start;
    margin: 2em;
    background-color: ${theme.colors.mainLightGrey};
    box-shadow: 0 3px 5px grey;
    border-radius: 0.2em;
    padding-right: 2em;
`