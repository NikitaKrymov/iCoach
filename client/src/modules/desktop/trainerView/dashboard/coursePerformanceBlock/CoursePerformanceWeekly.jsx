import React, { Component, useEffect } from 'react';
import Chart from 'chart.js';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import { theme } from '../../../../../theme';
import { renderWeekdaySalesRevenue } from '../../../../../utils/DateSortHelpers';

const CHART_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const renderTimeFrame = () => {
    const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDate = new Date();
    const priorDate = new Date();
    let weekTimeFrame = [];
    for (let i = 6; i >= 0; i--){
        priorDate.setDate(currentDate.getDate() - i);
        weekTimeFrame.push(WEEKDAYS[priorDate.getDay()]);
    }
    return weekTimeFrame;
}

const CoursePerformanceChartWeekly = (props) => {

    const chartContainer = React.useRef(null);
    const [chartInstance, setChartInstance] = React.useState(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chart(chartContainer.current, chartConfig);
        setChartInstance(newChartInstance);
      }
    }, [props.course, props.timePeriod]);
    
    if(props.course.id){
        console.log('rendering Weekly Chart', props.sales);
        renderWeekdaySalesRevenue(props.sales);
        var chartConfig = {
            type: 'line',
            data: {
                labels: renderTimeFrame(),
                datasets: [{
                    label: "",
                    backgroundColor: 'rgb(253, 138, 163, 0.5)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: renderWeekdaySalesRevenue(props.sales)
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            display: true,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        display: false,
                        position: 'left'
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                animation: {
                    duration: 500
                }
            }
        };

        return (
            <FlexBox style={{ padding: '1em', width: '50em', height: '25em' }} theme={CHART_THEME}>
                <canvas style={{ width: '100%', height: '100%' }} ref={chartContainer} />
            </FlexBox>
        );
    } else {
        return(
            <FlexBox style={{ padding: '1em' }} theme={CHART_THEME}>
                Select the course from the list
            </FlexBox>
        );
    }
  };
 
export default CoursePerformanceChartWeekly;   