import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    border-radius: 0.2em;
    margin-right: 0.5em;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    height: 17em;
    box-shadow: 0 0 2px grey;
    :hover {
        box-shadow: 0 0 5px grey;
    }
`