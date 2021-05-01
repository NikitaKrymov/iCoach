import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    width: 1.5em;
    height: 1.5em;
    background-color: #c51818;
    color: white;
    border-radius: 2em;
    margin: 0.5em;
    box-shadow: 0 1px 3px black;
    :hover{
        cursor: pointer;
        box-shadow: 0 2px 5px black;
    }
`