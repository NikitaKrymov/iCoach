import React from 'react';
import { Client } from '../../../../../../../interfaces/clientInterfaces/Client';
import UsersBlockContent from '../../../../../elements/desktop/dashboardElements/UsersBlock/UsersBlockContent';
import InBlockSpinner from '../../../../../elements/desktop/InBlockSpinner';
import PieChartClass from './PieChartClass';
import TotalUsersPie from './TotalUsersPieChart';


interface Props {
    clients: Client[],
    isTrainerClientsLoading?: boolean,
    fetchTrainerClients: (trainerId: string) => void,
    trainerId: string,
    timePeriod: number
}

const DashboardUsers: React.FC<Props> = (props) => {

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
        console.log(props.clients);
        return(
            <UsersBlockContent>            
                <TotalUsersPie totalClients={props.clients.length} />
                <PieChartClass data={[ { name: 'Active Users', value: props.clients.length}, { name: 'Unactive Users', value: 45 } ]}/>
                {/* <CircleData percentage={100} title="Total Users" label="100" circleColor={theme.colors.primary} />
                <CircleData percentage={47} title="Active Users" label="47" circleColor={theme.colors.green} /> */}
            </UsersBlockContent>
        );
    }
}

export default DashboardUsers;