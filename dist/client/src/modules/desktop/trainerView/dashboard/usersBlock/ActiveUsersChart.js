"use strict";
// import React from 'react';
// import Chart from 'chart.js';
// import FlexBox from '../../../../elements/desktop/commonElements/FlexBox';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class ActiveUsersChart extends React.Component {
//     chartRef = React.createRef(); 
//     componentDidMount(){
//         const myChartRef = this.chartRef.current.getContext('2d');
//         new Chart(myChartRef, {
//             type: 'line',
//             data: {
//                 labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//                 datasets: [
//                     {
//                         label: "Active Users",
//                         data: [17, 18, 25, 20, 30, 27, 35],
//                         backgroundColor: [
//                             'rgba(15, 68, 148, 0.1)',
//                         ],
//                         borderColor: [
//                             'rgba(0, 28, 155, 0.8)'
//                         ],
//                         borderWidth: '1',
//                         lineTension: 0,
//                         cubicInterpolationMode: 'monotone'
//                     }
//                 ]
//             }
//         })
//     }
//     render(){
//         return(
//             <FlexBox theme={{ justifyContent: 'center', alignItems: 'center' }} style={{ width: '90%' }}>
//                 <canvas
//                     id="myChart"
//                     ref={this.chartRef}
//                     height="150em"
//                 />
//             </FlexBox>
//         );
//     }
// }
// export default ActiveUsersChart;
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
// import { ResponsiveLine } from '@nivo/line'
// const DATA = [
//     {
//       "id": "Active Users",
//       "data": [
//         {
//           "x": "Sun",
//           "y": 20
//         },
//         {
//           "x": "Mon",
//           "y": 15
//         },
//         {
//           "x": "Tue",
//           "y": 30
//         },
//         {
//           "x": "Wed",
//           "y": 65
//         },
//         {
//           "x": "Thu",
//           "y": 50
//         },
//         {
//           "x": "Fri",
//           "y": 36
//         },
//         {
//           "x": "Sat",
//           "y": 70
//         }
//       ]
//     },
//     {
//         "id": "Unactive Users",
//         "data": [
//           {
//             "x": "Sun",
//             "y": 3
//           },
//           {
//             "x": "Mon",
//             "y": 5
//           },
//           {
//             "x": "Tue",
//             "y": 17
//           },
//           {
//             "x": "Wed",
//             "y": 10
//           },
//           {
//             "x": "Thu",
//             "y": 12
//           },
//           {
//             "x": "Fri",
//             "y": 4
//           },
//           {
//             "x": "Sat",
//             "y": 0
//           }
//         ]
//       }
//   ]
// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const ActiveUsersChart = () => (
//     <ResponsiveLine
//         data={DATA}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         xScale={{ type: 'point' }}
//         yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         colors={{ scheme: 'set1'}}
//         axisRight={null}
//         enableGridX={false}
//         enableGridY={false}
//         axisBottom={{
//             orient: 'bottom',
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legendOffset: 36,
//             legendPosition: 'middle'
//         }}
//         axisLeft={{
//             orient: 'left',
//             tickSize: 0,
//             tickPadding: 10,
//             tickRotation: 0,
//             legendOffset: -40,
//             legendPosition: 'middle'
//         }}
//         pointSize={3}
//         pointColor={{ theme: 'background' }}
//         pointBorderWidth={3}
//         pointBorderColor={{ from: 'serieColor' }}
//         pointLabelYOffset={-12}
//         useMesh={true}
//         enableSlices='x'
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 100,
//                 translateY: 0,
//                 itemsSpacing: 0,
//                 itemDirection: 'left-to-right',
//                 itemWidth: 80,
//                 itemHeight: 20,
//                 itemOpacity: 0.75,
//                 symbolSize: 12,
//                 symbolShape: 'circle',
//                 symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
// )
// export default ActiveUsersChart;
var react_1 = __importStar(require("react"));
var chart_js_1 = __importDefault(require("chart.js"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var theme_1 = require("../../../../../theme");
var ActiveUsersChart = /** @class */ (function (_super) {
    __extends(ActiveUsersChart, _super);
    function ActiveUsersChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CHART_THEME = {
            justifyContent: theme_1.theme.justifyContent.center
        };
        _this.chartRef = react_1.default.createRef();
        return _this;
    }
    ActiveUsersChart.prototype.componentDidMount = function () {
        var myChartRef = this.chartRef.current.getContext("2d");
        new chart_js_1.default(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "April", 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Active Users',
                        data: [1, 3, 4, 8, 10, 15, 17],
                        backgroundColor: [
                            // 'rgba(19, 148, 15, 0.3)',
                            'rgb(96,98,170, 0.5)'
                        ],
                        borderColor: [
                            //'rgba(5, 155, 0, 0.8)'
                            'rgb(96,98,170, 1)'
                        ],
                        borderWidth: '2',
                    },
                    {
                        label: 'Unactive Users',
                        data: [0, 1, 4, 2, 5, 7, 3],
                        backgroundColor: [
                            'rgba(146, 0, 127, 0.5)',
                            //'rgb(35,110,191, 0.3)'
                        ],
                        borderColor: [
                            'rgba(73, 0, 63, 0.5)',
                        ],
                        borderWidth: '2',
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
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
                legend: {
                    position: 'bottom'
                }
            }
        });
    };
    ActiveUsersChart.prototype.render = function () {
        return (<FlexBox_1.default theme={this.CHART_THEME} style={{ width: '100%' }}>
                <canvas id="myChart" ref={this.chartRef} width="100%" height="40em"/>
            </FlexBox_1.default>);
    };
    ;
    return ActiveUsersChart;
}(react_1.Component));
exports.default = ActiveUsersChart;
