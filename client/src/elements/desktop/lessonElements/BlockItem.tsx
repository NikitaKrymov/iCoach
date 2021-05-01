import styled from 'styled-components';

export default styled.div`
    width: 6em;
    height: 6em;
    margin: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 1px 5px grey;
    background-color: ${props => props.theme.backgroundColor};
    :hover {
        box-shadow: 0 1px 8px grey;
        cursor: pointer;
    }
`