import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 12em;
    grid-template-columns: 1fr 1fr;
    overflow-y: auto;
    :hover {
        cursor: pointer;
    }
`