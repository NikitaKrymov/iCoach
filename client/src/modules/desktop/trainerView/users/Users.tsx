import React, { useEffect, useState } from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import UsersContainer from '../../../../elements/desktop/usersElements/UsersContainer';
import UsersListContainer from '../../../../elements/desktop/usersElements/UsersListContainer';
import UserListElement from './UserListElement';
import UserSearchBar from './UserSearchBar';
import '../../../../css/main.css';
import UserProfile from './UserProfile';
import { Client } from '../../../../../../interfaces/clientInterfaces/Client';
import { AppState } from '../../../../reducers/rootReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchTrainerClientsRequest } from '../../../../actions/trainerActions';
import InBlockSpinner from '../../../../elements/desktop/InBlockSpinner';
import AddNewUserModal from './AddNewUserModal';

type Props = MapStateToProps & MapDispatchToProps;

const Users: React.FC<Props> = (props) => {

    const [userCard, setUserCard] = useState({});
    const [addNewUser, setAddNewUser] = useState(false);

    useEffect(() => {
        props.fetchUsers(props.trainerId)
    }, []);
    
    if (props.isTrainerClientsLoading) {
        return(
            <InBlockSpinner>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner>
        ); 
    } else {
        console.log(props.users)
        return(
            <UsersContainer>
                {addNewUser ? <AddNewUserModal closeModal={setAddNewUser} trainerId={props.trainerId} /> : null }
                <FlexBox theme={{ flexDirection: 'column' }}>
                    <FlexBox>
                        <UserSearchBar openModal={setAddNewUser} />
                    </FlexBox>
                    <FlexBox />
                    <FlexBox style={{ margin: '1em 0 -1em 4em' }}>
                        Name
                    </FlexBox>
                    {props.users.map((user, i) => {
                        return (
                            <UsersListContainer key={i} onClick={() => setUserCard(user) } className="hideScrollbar">
                                <UserListElement user={user} />
                            </UsersListContainer>
                        );
                    })}
                </FlexBox>
                <FlexBox>
                    <UserProfile userCard={userCard} />
                </FlexBox>
            </UsersContainer>
    );
    }
}

interface MapStateToProps {
    users: Client[],
    trainerId: string,
    isTrainerClientsLoading?: boolean
}

interface MapDispatchToProps {
    fetchUsers: (trainerId: string) => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    users: state.app.clients,
    trainerId: state.app.userData.id,
    isTrainerClientsLoading: state.isLoading.isTrainerClientsLoading
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchUsers: (trainerId) => dispatch(fetchTrainerClientsRequest(trainerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);