import React, { Component, useEffect } from 'react';
import Chart from 'chart.js';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import { theme } from '../../../../../theme';
import Chartjs from 'chart.js';
import { renderWeekdaySalesRevenue, renderMonthlySalesRevenue } from '../../../../../utils/DateSortHelpers';

const CHART_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const renderTimeFrame = () => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const priorDate = new Date();
    let monthTimeFrame = [];
    for (let i = 10; i >= 0; i--){
        priorDate.setMonth(currentDate.getMonth() - i);
        monthTimeFrame.push(MONTHS[priorDate.getMonth()]);
    }
    return monthTimeFrame;
}

const renderTimeFrameValue = (timePeriod) => {
    switch(timePeriod){
        default: 
            return [20, 27, 30, 35, 35, 40, 50];
        case 'M':
            return [100, 150, 175, 250, 300, 320, 400, 450, 500, 670, 850, 1000, 1100];
        case 'Y':
            return [1000, 4500, 7000];
    }
}

const CoursePerformanceChartMonthly = (props) => {

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
                    data: renderMonthlySalesRevenue(props.sales)
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
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
 
export default CoursePerformanceChartMonthly;   