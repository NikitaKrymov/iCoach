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
var DateSortHelpers_1 = require("../../../../../utils/DateSortHelpers");
var CHART_THEME = {
    justifyContent: theme_1.theme.justifyContent.center,
    alignItems: theme_1.theme.alignItems.center
};
var renderTimeFrame = function () {
    var WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var currentDate = new Date();
    var priorDate = new Date();
    var weekTimeFrame = [];
    for (var i = 6; i >= 0; i--) {
        priorDate.setDate(currentDate.getDate() - i);
        weekTimeFrame.push(WEEKDAYS[priorDate.getDay()]);
    }
    return weekTimeFrame;
};
var CoursePerformanceChartWeekly = function (props) {
    var chartContainer = react_1.default.useRef(null);
    var _a = react_1.default.useState(null), chartInstance = _a[0], setChartInstance = _a[1];
    react_1.useEffect(function () {
        if (chartContainer && chartContainer.current) {
            var newChartInstance = new chart_js_1.default(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [props.course, props.timePeriod]);
    if (props.course.id) {
        console.log('rendering Weekly Chart', props.sales);
        DateSortHelpers_1.renderWeekdaySalesRevenue(props.sales);
        var chartConfig = {
            type: 'line',
            data: {
                labels: renderTimeFrame(),
                datasets: [{
                        label: "",
                        backgroundColor: 'rgb(253, 138, 163, 0.5)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: DateSortHelpers_1.renderWeekdaySalesRevenue(props.sales)
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
        return (<FlexBox_1.default style={{ padding: '1em', width: '50em', height: '25em' }} theme={CHART_THEME}>
                <canvas style={{ width: '100%', height: '100%' }} ref={chartContainer}/>
            </FlexBox_1.default>);
    }
    else {
        return (<FlexBox_1.default style={{ padding: '1em' }} theme={CHART_THEME}>
                Select the course from the list
            </FlexBox_1.default>);
    }
};
exports.default = CoursePerformanceChartWeekly;
