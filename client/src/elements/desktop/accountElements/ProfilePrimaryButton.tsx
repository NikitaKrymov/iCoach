import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: 4em;
    height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    padding: 0.2em;
    background-color: ${theme.colors.mainBlue};
    color: ${theme.colors.white};
    border-radius: 0.2em;
    :hover {
        cursor: pointer;
        background-color: ${theme.colors.darkPrimary};
        color: ${theme.colors.white};
    }
`