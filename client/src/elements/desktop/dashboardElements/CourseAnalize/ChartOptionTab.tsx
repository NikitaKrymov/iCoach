import styled from 'styled-components';

export default styled.div`
    border-bottom: ${props => props.theme.borderBottom};
    margin: 0.2em 0.5em 0.2em 0;
    display: flex;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`