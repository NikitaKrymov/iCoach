import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.fieldset`
    border: 1px solid grey;
    border-radius: 0.2em;
    :hover {
        border: 1px solid ${theme.colors.mainBlue}
    }
`