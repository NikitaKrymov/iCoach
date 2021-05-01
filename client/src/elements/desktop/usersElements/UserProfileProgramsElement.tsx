import styled from 'styled-components';

export default styled.div`
    margin-top: 1em;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0 2px 5px grey;
    height: 3em;
    :hover {
        box-shadow: 0 2px 8px grey;
        cursor: pointer;
    }
`