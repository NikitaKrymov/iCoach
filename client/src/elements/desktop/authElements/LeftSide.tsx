import styled from 'styled-components';
import { theme } from '../../../theme';

export default styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    transition: 0.2s ease;
    padding: 3em;
    :hover {
        background: rgb(0, 0, 0, 0.5);
        width: 250%;
    }
`