import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    transition: 0.2s;
    color: ${theme.colors.black};
    font-size: 1.5em;
    :hover {
        color: ${theme.colors.primary};
        transform: rotateZ(60deg);
        cursor: pointer;
    }
`