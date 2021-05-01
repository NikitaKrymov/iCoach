import React, { Component, useEffect } from 'react';
import Chart from 'chart.js';
import FlexBox from '../../../../../elements/desktop/commonElements/FlexBox';
import { theme } from '../../../../../theme';
import Chartjs from 'chart.js';
import { sortWeekEveryday } from '../../../../../utils/DateSortHelpers';

const CHART_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

// class ChartClass extends Component { 

//     CHART_THEME = {
//         justifyContent: theme.justifyContent.center
//     }

//     chartRef = React.createRef();

//     componentDidMount() {
//         if (this.props.course.id){
//             const myChartRef = this.chartRef.current.getContext("2d");
//             new Chart(myChartRef, {
//             type: "line",
//             data: {
//                 //Bring in data
//                 labels: ["Jan", "Feb", "March", "April", 'May', 'June', 'July'],
//                 datasets: [
//                     {
//                         label: this.props.course.title ? this.props.course.title : "Test",
//                         data: [50, 67, 91, 40, 18, 63, 20],
//                         backgroundColor: [
//                             'rgba(15, 68, 148, 0.5)',
//                         ],
//                         borderColor: [
//                             'rgba(0, 28, 155, 0.8)'
//                         ],
//                         borderWidth: '1',
//                     }
//                 ]
//             },
//             options: {
//                 //Customize chart options
//             }
//         });
//         }
//     }

//     render(){
//         if (!this.props.course){
//             return(
//                 <FlexBox theme={this.CHART_THEME} style={{ width: '100%'}}>
//                     <canvas
//                         id="myChart"
//                         ref={this.chartRef}
//                         width="100%"
//                         height="35em"
//                     />
//                 </FlexBox>
//             );
//         } else {
//             return (
//                 <FlexBox style={{ width: '100%'}}>
//                     No course selected
//                 </FlexBox>
//             );
//         }

//     };
// }

// export default ChartClass;

const renderTimeFrame = (timePeriod) => {
    switch(timePeriod){
        default: 
            return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        case "M":
            return ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        case 'Y':
            return ['2020', '2021']
    }
}

const renderRevenueData = (course, sales) => {
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

const CoursePerformanceChart = (props) => {

    //BAR CHART
    // const chartConfig = {
    //     type: 'bar',
    //     data:  {
    //         labels: [props.last, props.present],
    //         datasets: [{
    //             label: "",
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [props.lastRevenue, props.presentRevenue]
    //         }]
    //     },
    //     options: {
    //         legend: {
    //             display: false
    //         },
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true,
    //                     display: false
    //                 },
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false
    //                 },
    //                 display: false
    //             }],
    //             xAxes: [{
    //                 gridLines: {
    //                     display: false
    //                 }
    //             }]
    //         },
    //         animation: {
    //             duration: 500
    //         }
    //     }
    //   };

    var chartConfig = {
        type: 'line',
        data: {
            labels: renderTimeFrame(props.timePeriod),
            datasets: [{
                label: "",
                backgroundColor: 'rgb(253, 138, 163, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: renderRevenueData(props.course, props.sales)
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

    const chartContainer = React.useRef(null);
    const [chartInstance, setChartInstance] = React.useState(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chart(chartContainer.current, chartConfig);
        setChartInstance(newChartInstance);
      }
    }, [props.course, props.timePeriod, props.sales]);
    
    if(props.course.id){
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
 
export default CoursePerformanceChart;   