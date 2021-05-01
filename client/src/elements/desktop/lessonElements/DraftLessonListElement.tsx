import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 20fr 1fr;
    align-items: center;
    justify-content: center;
    height: 3em;
    position: relative;
    margin: 0.5em;
    border-radius: 0.5em;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.secondary};
    box-shadow: 0 1px 5px grey;
    :hover {
        box-shadow: 0 0 8px black;
        cursor: pointer;
    }
`