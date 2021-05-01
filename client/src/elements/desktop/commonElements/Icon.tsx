import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    color: ${theme.colors.grey};
    :hover {
        color: ${theme.colors.primary};
        cursor: pointer;
    }
`