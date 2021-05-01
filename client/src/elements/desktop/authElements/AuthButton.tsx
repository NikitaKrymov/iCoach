import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    justify-content: ${props => props.theme.justifyContent};
    width: 6em;
    height: 3em;
    display: flex;
    align-items: ${props => props.theme.alignItems};
    background-color: transparent;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    margin-top: 3em;
    border: 1px solid white;
    border-radius: 0.2em;
    :hover{
        background-color: ${theme.colors.white};
        color: ${theme.colors.mainBlue};
        cursor: pointer;
    }
`