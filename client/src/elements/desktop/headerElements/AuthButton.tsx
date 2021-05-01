import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    color: white;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5em;
    transition: 0.2s;
    padding: 0.5em;
    margin-right: 1em;
    :hover{
        cursor: pointer;
        background: transparent;
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondary};
    }
`