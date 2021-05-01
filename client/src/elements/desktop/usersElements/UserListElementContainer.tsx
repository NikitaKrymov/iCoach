import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    height: 3em;
    width: 100%;
    padding: 0.5em;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    :hover {
        cursor: pointer;
        background-color: ${theme.colors.lightGrey}
    }
`