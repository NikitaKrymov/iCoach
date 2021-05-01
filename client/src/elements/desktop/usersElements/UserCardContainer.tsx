import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    height: 45em;
    width: 100%;
    display: flex;
    box-shadow: 0 4px 8px grey;
    border-radius: 0.5em;
    background-color: ${theme.colors.white};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`