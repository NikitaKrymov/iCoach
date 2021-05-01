import styled from 'styled-components';

export default styled.input`
    width: 100%;
    height: 1.5em;
    padding: 0.5em;
    border-radius: 0.2em;
    outline: none;
    border: 1px solid lightgrey;
    ::placeholder {
        color: grey
    }
    :focus {
        border: 1px solid black;
    }
`