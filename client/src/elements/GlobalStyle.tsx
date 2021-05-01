import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export default createGlobalStyle`
    body {
        padding: 0;
        background-color: ${theme.colors.mainGrey};
        margin: 0;
        overflow: hidden;
    }
`