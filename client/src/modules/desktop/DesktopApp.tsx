import React from 'react';
import ContentContainer from '../../elements/desktop/ContentContainer';
import GlobalStyle from '../../elements/GlobalStyle';
import { createRoutes } from '../../routes';
import AuthPage from './AuthPage';
import Header from './Header';

interface Props {
    authStatus: boolean
}


const App: React.FC<Props> = (props) => {
    if (props.authStatus){
        const routes = createRoutes();
        return(
            <div style={{ display: 'flex' }}>
                <GlobalStyle />
                <Header />
                <ContentContainer>
                    {routes}
                </ContentContainer>
            </div>
        );
    } else {
        return(
            <div>
                <GlobalStyle />
                <ContentContainer>
                    <AuthPage />
                </ContentContainer>
            </div>  
        );
    }
}

export default App;