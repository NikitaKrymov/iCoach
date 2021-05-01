import React, { useEffect, useState } from 'react';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import NewUsersBlockContainer from '../../../../../elements/desktop/dashboardElements/NewUsersBlock/NewUsersBlockContainer';
import Text from '../../../../../elements/desktop/commonElements/Text';
import { theme } from '../../../../../theme';
import { Sale } from '../../../../../../../interfaces/Interfaces';
import { sortArrayToday, sortArrayWeek, sortArrayMonth } from '../../../../../utils/DateSortHelpers';
import InBlockSpinner from '../../../../../elements/desktop/InBlockSpinner';
import RevenueChart from './RevenueChart';

const DATE_ARRAY = [0, 7, 30, 6, 1];

const REVENUE_TEXT_THEME = {
    fontSize: '3em',
    alignItems: theme.alignItems.flexStart
}

const COMPARE_REVENUE_TEXT_THEME = {
    alignItems: theme.alignItems.center,
}

const FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.column,
    alignItems: theme.alignItems.center,
    justifyContent: theme.justifyContent.flexStart
}

interface Props {
    isTrainerSalesLoading?: boolean,
    sales: Sale[],
    timePeriod: string,
}

const countTotalRevenue = (sales: Sale[]) => {
    let totalRevenue = 0;
    console.log(sales);
    sales.map((sale) => {
        return totalRevenue += sale.price;
    });
    console.log('revenue', totalRevenue)
    return totalRevenue;
}

const countRevenueDifference = (sales: Sale[], totalRevenue: number, setRevenueDifference: React.Dispatch<React.SetStateAction<number>>) => {
    let revenueDifference = 0;

    setRevenueDifference(revenueDifference);
}

const renderWeekRevenue = (sales: Sale[]) => {
    const sortedArray = sortArrayWeek(sales);
    const isPositive = true;
    return(
        <NewUsersBlockContainer style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <FlexBox theme={FLEXBOX_THEME}>
                <Text theme={REVENUE_TEXT_THEME}>
                    {countTotalRevenue(sortedArray)}$
                </Text>
                <Text theme={COMPARE_REVENUE_TEXT_THEME}>
                    <i style={{ color: isPositive ? '#88B360' : '#D60D04', fontSize: '1em' }} className={ isPositive ? "fas fa-arrow-up" : "fas fa-arrow-down" }></i> <div style={{ color: '#88B360', fontSize: '1.5em', marginLeft: '0.2em' }}></div>
                </Text>
            </FlexBox>
            <FlexBox>
                <RevenueChart last="Last Week" present="This Week" lastRevenue={30} presentRevenue={countTotalRevenue(sortedArray)} />
            </FlexBox>
        </NewUsersBlockContainer>
    );
}

const renderMonthRevenue = (sales: Sale[]) => {
    const sortedArray = sortArrayMonth(sales);
    const isPositive = true;

    return(
        <NewUsersBlockContainer style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <FlexBox theme={FLEXBOX_THEME}>
                <Text theme={REVENUE_TEXT_THEME}>
                    {countTotalRevenue(sortedArray)}$
                </Text>
                <Text theme={COMPARE_REVENUE_TEXT_THEME}>
                    <i style={{ color: isPositive ? '#88B360' : '#D60D04', fontSize: '1em' }} className={ isPositive ? "fas fa-arrow-up" : "fas fa-arrow-down" }></i> <div style={{ color: '#88B360', fontSize: '1.5em', marginLeft: '0.2em' }}></div>
                </Text>
            </FlexBox>
            <FlexBox>
                <RevenueChart last="Last Month" present="This Month" lastRevenue={150} presentRevenue={countTotalRevenue(sortedArray)} />
            </FlexBox>
        </NewUsersBlockContainer>
    );
}


const DashboardRevenue: React.FC<Props> = (props) => {

    const [isPositive, setIsPositive] = useState(false);
    const [revenueDifference, setRevenueDifference] = useState(0);
    const [sortedSales, setSortedSales] = useState([]);

    if (props.isTrainerSalesLoading){
        return(
            <InBlockSpinner>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner>
        );
    } else {
        switch(props.timePeriod){
            default:
                return renderWeekRevenue(props.sales);
            case "M":
                return renderMonthRevenue(props.sales);
        }
    }
}

export default DashboardRevenue;