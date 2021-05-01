import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: ${props => props.theme.gridTemplateColumns};
    grid-template-rows: ${props => props.theme.gridTemplateRows};
    grid-gap: ${props => props.theme.gridGap};
`