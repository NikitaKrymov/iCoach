import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: flex;
    height: 3em;
    width: 10em;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2em;
    color: ${theme.colors.white};
    font-family: 'Times New Roman', Times, serif;
    background-color: ${theme.colors.mainBlue};
    :hover {
        color: ${theme.colors.primary};
        cursor: pointer;
    }
`