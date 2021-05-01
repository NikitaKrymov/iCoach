import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.input`
    outline: none;
    border: none;
    width: 30em;
    height: 2em;
    border-radius: 0.5em;
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid grey;
    :focus{
        border: 1px solid ${theme.colors.primary};
    }
`