import React from 'react';
import AuthFormContainer from '../../elements/desktop/authElements/AuthFormContainer';
import AuthPageContainer from '../../elements/desktop/authElements/AuthPageContainer';
import LeftSide from '../../elements/desktop/authElements/LeftSide';
import RightSide from '../../elements/desktop/authElements/RightSide';
import AuthButton from '../../elements/desktop/authElements/AuthButton';
import FlexBox from '../../elements/desktop/commonElements/FlexBox';
import { CLIENT } from '../../../../interfaces/clientInterfaces/Client';
import { TRAINER } from '../../../../interfaces/trainerInterfaces/Trainer';
import { authenticateTrainerRequest, authenticateClientRequest } from '../../actions/authActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AuthCredentials } from '../../../../interfaces/Interfaces';

const TITLE_STYLE_FALSE = {
    fontSize: '2.5em',
    color: 'black'
}

const TITLE_STYLE_TRUE = {
    fontSize: '3em',
    color: 'white',
}

const BUTTON_THEME = {
    
}

const renderContent = (credentials: AuthCredentials, onClickAction: (credentials: AuthCredentials) => void, description: string) => {
    return(
        <FlexBox theme={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ color: 'white', marginTop: '2em', textAlign: 'center' }}>
                {description}
            </div>
            <AuthButton theme={BUTTON_THEME} onClick={() => onClickAction(credentials)}> 
                Login
            </AuthButton> 
        </FlexBox>
    );
}

const AuthPage: React.FC<MapDispatchToProps> = (props) => {

    const [user, setUser] = React.useState(false);
    const [trainer, setTrainer] = React.useState(false);

    return(
        <AuthPageContainer>
            <AuthFormContainer>
                <LeftSide onMouseEnter={() => setUser(true)} onMouseLeave={() => setUser(false)}>
                    <div style={user ? TITLE_STYLE_TRUE : TITLE_STYLE_FALSE }>
                        User
                    </div>
                    {user ? renderContent({ username: 'clientname', password: 'password' }, props.authClient, 'Check out the trainer interface and create your own course on our platform') : null }
                </LeftSide>
                <RightSide onMouseEnter={() => setTrainer(true)} onMouseLeave={() => setTrainer(false)}>
                    <div style={ trainer ? TITLE_STYLE_TRUE : TITLE_STYLE_FALSE}>
                        Trainer
                    </div>
                    {trainer ? renderContent({ username: 'jsmith', password: 'password' }, props.authTrainer, "Take a look at the Client side user interfaces where you can access purchased course from the trainers") : null }
                </RightSide>
            </AuthFormContainer>
        </AuthPageContainer>
    );
}

interface MapDispatchToProps {
    authClient: (credentials: AuthCredentials) => void,
    authTrainer: (credentials: AuthCredentials) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    authClient: (credentials) => dispatch(authenticateClientRequest(credentials)),
    authTrainer: (credentials) => dispatch(authenticateTrainerRequest(credentials))
});

export default connect(null, mapDispatchToProps)(AuthPage);