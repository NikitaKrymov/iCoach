import styled from 'styled-components';

export default styled.div`
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    display: flex;
    justify-content: ${props => props.theme.justifyContent};
    align-items: ${props => props.theme.alignItems};
    text-align: ${props => props.theme.textAlign};
    z-index: 1;
    font-family: Arial;
    margin: ${props => props.theme.margin};
    cursor: ${props => props.theme.cursor};
    width: ${props => props.theme.width};
`