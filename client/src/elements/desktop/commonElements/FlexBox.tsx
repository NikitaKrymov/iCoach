import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: ${props => props.theme.justifyContent};
    align-items: ${props => props.theme.alignItems};
    font-size: ${props => props.theme.fontSize};
    margin: ${props => props.theme.margin};
    flex-direction: ${props => props.theme.flexDirection};
    padding: ${props => props.theme.padding};
    flex-wrap: ${props => props.theme.flexWrap};
    width: ${props => props.theme.width};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border-bottom: ${props => props.theme.borderBottom};
`