import styled from 'styled-components';
import { theme } from '../../../../theme';

export default styled.div`
    display: flex;
    align-items: center;
    padding: 0.5em;
    height: 3em;
    border-bottom: 1px solid ${theme.colors.mainGrey};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
`