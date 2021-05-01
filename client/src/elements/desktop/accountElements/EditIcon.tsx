import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: flex;
    justify-content: center;
    color: ${theme.colors.mainBlue};
    transition: 0.2s;
    :hover {
        cursor: pointer;
        font-size: 1.2em;
    }
`