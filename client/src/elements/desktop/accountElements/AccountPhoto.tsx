import styled from 'styled-components';
import ACCOUNT_IMAGE from '../../../images/AccountImage.jpg';

export default styled.div`
    width: 10em;
    height: 10em;
    border: 1px solid grey;
    border-radius: 50%;
    background-image: url(${ACCOUNT_IMAGE});
    z-index: 2;
    box-shadow: 0 2px 5px grey;
`