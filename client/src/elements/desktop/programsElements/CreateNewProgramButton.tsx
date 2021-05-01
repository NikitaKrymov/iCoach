import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    font-size: 1.2em;
    display: flex;
    width: 10em;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    padding: 0.3em;
    margin-right: 1em;
    border-radius: 0.3em;
    background: ${theme.colors.primary};
    box-shadow: 0 2px 5px black;
    :hover{
        cursor: pointer;
        background: ${theme.colors.darkPrimary};
        color: ${theme.colors.white};
    }
`