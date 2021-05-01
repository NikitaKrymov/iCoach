import React from 'react';
import GlobalStyle from '../../elements/GlobalStyle';
import MobileAppContainer from '../../elements/modile/MobileAppContainer';
import { createRoutes } from '../../routes';
import Header from '../desktop/Header';
import Footer from './Footer';

const routes = createRoutes();


interface Props {
    authStatus: boolean
}

const App: React.FC<Props> = (props) => {
    return(
        <div>
            <GlobalStyle />
            <Header />
            <MobileAppContainer>
                {routes}
            </MobileAppContainer>
            <Footer />
        </div>
    );
}

export default App;