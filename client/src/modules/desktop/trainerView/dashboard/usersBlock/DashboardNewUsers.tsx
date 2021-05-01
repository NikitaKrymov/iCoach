import React from 'react';
import NewUsersBlockContainer from '../../../../../elements/desktop/dashboardElements/NewUsersBlock/NewUsersBlockContainer';
import ActiveUsersChart from './ActiveUsersChart';
import InBlockSpinner from '../../../../../elements/desktop/InBlockSpinner';
import { Client } from '../../../../../../../interfaces/clientInterfaces/Client';

interface Props {
    clients: Client[],
    isTrainerClientsLoading?: boolean,
    fetchTrainerClients: (trainerId: string) => void,
    trainerId: string
}

const DashboardNewUsers: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.fetchTrainerClients(props.trainerId);
        console.log('Fetching Trainer CLients', props.trainerId)
    }, [])

    if (props.isTrainerClientsLoading){
        return(
            <InBlockSpinner>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner>
        );
    } else {
        return(
            <NewUsersBlockContainer>
                <ActiveUsersChart />
                {/* <FlexBox theme={{ alignItems: 'center' }}>
                    Last Week
                    <Text theme={NEW_USERS_NUMBER_THEME}>
                        15
                    </Text>
                </FlexBox>
                <FlexBox>
                    <Text theme={COMPARE_NEW_USERS_NUMBER_THEME}>
                        <i style={{ color: 'green', fontSize: '2em' }} className="fas fa-angle-double-up"></i> <div style={{ fontSize: '3em', marginLeft: '0.2em' }}>6</div>
                    </Text>
                </FlexBox> */}
            </NewUsersBlockContainer>
        );
    }
}

export default DashboardNewUsers;