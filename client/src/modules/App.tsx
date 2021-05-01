import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authorizeUserRequest } from '../actions/authActions';
import { AppState } from '../reducers/rootReducer';
import DesktopApp from './desktop/DesktopApp';
import MobileApp from './mobile/MobileApp';

type Props = MapStateToProps & MapDispatchToProps;

const App: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.authorizeUser();
    }, []);

    console.log(window.innerWidth)
    if (window.innerWidth <= 1024) {
        return(
            <MobileApp authStatus={props.authStatus}/>
        );
    } else {
        console.log(props.authStatus);
        return(
            <DesktopApp authStatus={props.authStatus}/>
        );
    }
}

interface MapStateToProps {
    authStatus: boolean
}

interface MapDispatchToProps {
    authorizeUser: () => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    authStatus: state.app.authStatus
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    authorizeUser: () => dispatch(authorizeUserRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);