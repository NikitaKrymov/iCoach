import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 20fr 1fr;
    height: 3em;
    margin: 0.5em;
    border-radius: 0.3em;
    background-color: ${theme.colors.white};
    box-shadow: 0 1px 5px grey;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: space-evenly;
    align-items: center;
    :hover {
        box-shadow: 0 0 8px grey;
        cursor: pointer;
    }
`