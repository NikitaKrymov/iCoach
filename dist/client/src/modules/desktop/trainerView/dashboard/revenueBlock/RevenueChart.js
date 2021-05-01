"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var chart_js_1 = __importDefault(require("chart.js"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var theme_1 = require("../../../../../theme");
var CHART_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center
};
// class RevenueChart extends Component { 
//     CHART_THEME = {
//         justifyContent: theme.justifyContent.center
//     }
//     chartRef = React.createRef();
//     // componentDidMount() {
//     //     const myChartRef = this.chartRef.current.getContext("2d");
//     //     new Chart(myChartRef, {
//     //         type: "line",
//     //         data: {
//     //             //Bring in data
//     //             labels: ["Jan", "Feb", "March", "April", 'May', 'June', 'July'],
//     //             datasets: [
//     //                 {
//     //                     label: '',
//     //                     data: [0, 30, 54, 90, 100, 150, 170],
//     //                     backgroundColor: [
//     //                         'rgba(15, 68, 148, 0.1)',
//     //                     ],
//     //                     borderColor: [
//     //                         'rgba(0, 28, 155, 0.8)'
//     //                     ],
//     //                     borderWidth: '1',
//     //                 }
//     //             ]
//     //         },
//     //         options: {
//     //             //Customize chart options
//     //         }
//     //     });
//     // }
//     // render(){
//     //     return(
//     //         <FlexBox theme={this.CHART_THEME} style={{ width: '95%'}}>
//     //             <canvas
//     //                 id="myChart"
//     //                 ref={this.chartRef}
//     //                 width="100%"
//     //                 height="50em"
//     //             />
//     //         </FlexBox>
//     //     );
//     // };
//     componentDidMount(){
//         console.log(this.props)
//         const myChartRef = this.chartRef.current.getContext("2d");
//         new Chart(myChartRef, {
//             type: "bar",
//             data: {
//                 //Bring in data
//                 labels: [this.props.last, this.props.present],
//                 datasets: [
//                     {
//                         label: this.props.last,
//                         data: [this.props.lastRevenue],
//                         backgroundColor: [
//                             //'rgba(138, 74, 255, 1)',
//                             //'rgba(138, 74, 255, 1)',
//                             //'rgb(0,122,225,1)',
//                             //'rgb(0,122,225,1)',
//                             'rgb(112, 138, 255, 0.8)',
//                             'rgb(112, 138, 255, 0.8)'
//                         ],
//                         borderWidth: '1',
//                     },
//                     {
//                         label: this.props.present,
//                         data: [0, this.props.presentRevenue],
//                         backgroundColor: [
//                             //'rgba(187, 255, 125, 1)',
//                             //'rgba(187, 255, 125, 1)',
//                             //'rgb(0,122,225,1)',
//                             //'rgb(28,168,221, 1)',
//                             //'rgb(28,168,221, 1)',
//                             //'rgba(138, 74, 255, 1)',
//                             //'rgba(138, 74, 255, 1)',
//                             'rgb(124, 80, 204, 0.8)',
//                             'rgb(124, 80, 204, 0.8)',
//                         ],
//                         borderWidth: '1',
//                     }
//                 ]
//             },
//             options: {
//                 scales: {
//                     xAxes: [{
//                         stacked: true
//                     }],
//                     yAxes: [{
//                         stacked: true
//                     }]
//                 }
//             }
//         });
//     }
//     render(){
//         return(
//             <FlexBox theme={this.CHART_THEME} style={{ width: '100%'}}>
//                 <canvas
//                     id="myChart"
//                     ref={this.chartRef}
//                     width="100%"
//                     height="80em"
//                 />
//             </FlexBox>
//         );
//     };
// }
// export default RevenueChart;
var RevenueChart = function (props) {
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
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat", "Sun"],
            datasets: [{
                    label: "",
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 3, 5, 9, 24, 24, 30]
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
                            display: false,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        display: false
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
    var chartContainer = react_1.default.useRef(null);
    var _a = react_1.default.useState(null), chartInstance = _a[0], setChartInstance = _a[1];
    react_1.useEffect(function () {
        if (chartContainer && chartContainer.current) {
            var newChartInstance = new chart_js_1.default(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);
    return (<FlexBox_1.default style={{ padding: '1em' }} theme={CHART_THEME}>
            <canvas style={{ width: '100%', height: '100%', padding: '0.5em' }} ref={chartContainer}/>
        </FlexBox_1.default>);
};
exports.default = RevenueChart;
