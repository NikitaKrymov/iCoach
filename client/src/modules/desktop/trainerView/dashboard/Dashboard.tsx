import React, { useState } from 'react';
import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
import BlockTitle from '../../../../elements/desktop/dashboardElements/BlockTitle';
import DashboardBlock from '../../../../elements/desktop/dashboardElements/DashboardBlock';
import DashboardContainer from '../../../../elements/desktop/dashboardElements/DashboardContainer';
import DashboardTopRowContainer from '../../../../elements/desktop/dashboardElements/DashboardTopRowContainer';
import { theme } from '../../../../theme';
import DashboardNewUsers from './usersBlock/DashboardNewUsers';
import DashboardRevenue from './revenueBlock/DashboardRevenue';
import DashboardUsers from './usersBlock/DashboardUsers';
import { AppState } from '../../../../reducers/rootReducer';
import { Dispatch } from 'redux';
import { Client } from '../../../../../../interfaces/clientInterfaces/Client';
import { Sale } from '../../../../../../interfaces/Interfaces';
import { Course } from '../../../../../../interfaces/courseInterfaces/Course';
import { connect, useStore } from 'react-redux';
import { fetchTrainerClientsRequest, fetchTrainerCoursesRequest, fetchTrainerSalesRequest } from '../../../../actions/trainerActions';
import CoursePerformance from './coursePerformanceBlock/CoursePerformance';
import CoursePerformanceContainer from '../../../../elements/desktop/dashboardElements/CourseAnalize/CoursePerformanceContainer';
import SalesContainer from '../../../../elements/desktop/dashboardElements/SalesBlock/SalesContainer';

const NEW_USERS_TITLE_FLEXBOX = {
    justifyContent: theme.justifyContent.sb
}

type Props = MapStateToProps & MapDispatchToProps;

const Dashboard: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.fetchTrainerCourses(props.trainerId);
        props.fetchTrainerSales(props.trainerId);
    }, [])

    const [userBlockTimePeriod, setUserBlockTimePeriod] = useState(0);
    const [activeUserBlockTimePeriod, setActiveUserBlockTimePeriod] = useState(0);
    const [revenueBlockTimePeriod, setRevenueBlockTimePeriod] = useState("W");

    return(
        <DashboardContainer>
            <DashboardTopRowContainer>
                <DashboardBlock>
                    <BlockTitle>
                        Users
                    </BlockTitle>
                    <DashboardUsers timePeriod={userBlockTimePeriod} isTrainerClientsLoading={props.isTrainerClientsLoading} clients={props.users} fetchTrainerClients={props.fetchTrainerClients} trainerId={props.trainerId}/>
                </DashboardBlock>
                {/* <DashboardBlock>
                    <BlockTitle>
                        <FlexBox theme={NEW_USERS_TITLE_FLEXBOX} style={{ width: '100%'}} >
                            <FlexBox>
                                New Users
                            </FlexBox>
                            <FlexBox>
                                <select onChange={(e) => console.log(e.target)} style={{ outline: 'none', border: 'none' }} >
                                    <option id="0" style={{ outline: 'none', border: 'none'}}>
                                        Last 30 days
                                    </option>
                                    <option id="1" style={{ outline: 'none', border: 'none'}}>
                                        Last 7 days
                                    </option>
                                    <option id="2" style={{ outline: 'none', border: 'none'}}>
                                        Last 6 months
                                    </option>
                                    <option id="3" style={{ outline: 'none', border: 'none'}}>
                                        Last year
                                    </option>
                                </select>
                            </FlexBox>
                        </FlexBox>
                    </BlockTitle> 
                    <DashboardNewUsers isTrainerClientsLoading={props.isTrainerClientsLoading} clients={props.users} fetchTrainerClients={props.fetchTrainerClients} trainerId={props.trainerId} />
                </DashboardBlock> */}
                <DashboardBlock>
                <BlockTitle>
                        <FlexBox theme={NEW_USERS_TITLE_FLEXBOX} style={{ width: '100%'}} >
                            <FlexBox>
                                Revenue
                            </FlexBox>
                            <FlexBox>
                                <select onChange={(e) => setRevenueBlockTimePeriod(e.target.value)} style={{ outline: 'none', border: 'none' }}>
                                    <option value="W" style={{ outline: 'none', border: 'none'}}>
                                        Week
                                    </option>
                                    <option value="M" style={{ outline: 'none', border: 'none'}}>
                                        Month
                                    </option>
                                    <option value="Y" style={{ outline: 'none', border: 'none'}}>
                                        Year
                                    </option>
                                </select>
                            </FlexBox>
                        </FlexBox>
                    </BlockTitle>
                    <DashboardRevenue timePeriod={revenueBlockTimePeriod} isTrainerSalesLoading={props.isTrainerSalesLoading} sales={props.sales} />
                </DashboardBlock>
            </DashboardTopRowContainer>
            <CoursePerformance sales={props.sales} isTrainerSalesLoading={props.isTrainerSalesLoading} isTrainerCoursesLoading={props.isTrainerCoursesLoading} courses={props.courses} trainerId={props.trainerId} />
            <SalesContainer>
                Test
            </SalesContainer>
        </DashboardContainer>
    );
}

interface MapStateToProps {
    users: Client[],
    sales: Sale[],
    courses: Course[],
    isTrainerClientsLoading?: boolean,
    isTrainerSalesLoading?: boolean,
    isTrainerCoursesLoading?: boolean,
    trainerId: string
}

interface MapDispatchToProps {
    fetchTrainerClients: (trainerId: string) => void,
    fetchTrainerSales: (trainerId: string) => void,
    fetchTrainerCourses: (trainerId: string) => void
}

const mapStateToProps = (state: AppState):MapStateToProps => ({
    users: state.app.clients,
    sales: state.app.sales,
    courses: state.app.courses,
    isTrainerClientsLoading: state.isLoading.isTrainerClientsLoading,
    isTrainerCoursesLoading: state.isLoading.isTrainerCoursesLoading,
    isTrainerSalesLoading: state.isLoading.isTrainerSalesLoading,
    trainerId: state.app.userData.id
});

const mapStateToDispatch = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchTrainerClients: (trainerId) => dispatch(fetchTrainerClientsRequest(trainerId)),
    fetchTrainerCourses: (trainerId) => dispatch(fetchTrainerCoursesRequest(trainerId)),
    fetchTrainerSales: (trainerId) => dispatch(fetchTrainerSalesRequest(trainerId)),
})

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);