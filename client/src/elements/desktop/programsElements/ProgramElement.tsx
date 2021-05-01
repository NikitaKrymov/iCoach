import styled from 'styled-components';
import BACKGROUND from '../../../images/programBackground.jpg';

export default styled.div`
    width: 25em;
    height: 16em;
    border-radius: 0.3em;
    box-shadow: 1px 1px 5px grey;
    margin: 1em;
    transition: 0.1s;
    display: grid;
    grid-template-rows: 2fr 1fr;
    background-image: url(data:image/jpeg;base64, ${props => props.theme.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    :hover {
        transition: 0.1s;
        box-shadow: 1px 1px 10px grey;
        cursor: pointer;
    }
`