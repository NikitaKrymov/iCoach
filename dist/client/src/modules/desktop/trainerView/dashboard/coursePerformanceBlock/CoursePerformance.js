"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var ChartOptions_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/ChartOptions"));
var ChartsContainer_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/ChartsContainer"));
var CourseListElement_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/CourseListElement"));
var CoursePerformanceContainer_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/CoursePerformanceContainer"));
var LeftSide_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSide"));
var LeftSideContent_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSideContent"));
var LeftSideTitle_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSideTitle"));
var RightSide_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSide"));
var RightSideContent_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSideContent"));
var RightSideTitle_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSideTitle"));
var InBlockSpinner_1 = __importDefault(require("../../../../../elements/desktop/InBlockSpinner"));
var theme_1 = require("../../../../../theme");
var CoursePerformanceMonthly_1 = __importDefault(require("./CoursePerformanceMonthly"));
var CoursePerformanceWeekly_1 = __importDefault(require("./CoursePerformanceWeekly"));
var renderCoursePerformanceChart = function (sales, selectedCourse, performanceTimePeriod) {
    switch (performanceTimePeriod) {
        default:
            return <CoursePerformanceWeekly_1.default sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>;
        case "M":
            return <CoursePerformanceMonthly_1.default sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>;
        case "Y":
            return <CoursePerformanceWeekly_1.default sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>;
    }
};
var sortSales = function (sales, courseId, setSortedSales) {
    console.log(courseId, sales);
    var sortedSales = sales.filter(function (sale) {
        if (sale.courseId === courseId) {
            console.log(sale);
            return sale;
        }
    }).sort(function (a, b) {
        return a.date.getDate() - b.date.getDate();
    });
    console.log(sortedSales);
    setSortedSales(sortedSales);
};
var CoursePerformance = function (props) {
    var _a = react_1.default.useState({ id: '' }), selectedCourse = _a[0], setSelectedCourse = _a[1];
    var _b = react_1.default.useState(0), selectedOption = _b[0], setSelectedOption = _b[1];
    var _c = react_1.default.useState("W"), performanceTimePeriod = _c[0], setPerformanceTimePeriod = _c[1];
    var _d = react_1.default.useState({}), sortedSales = _d[0], setSortedSales = _d[1];
    console.log(sortedSales);
    if (props.isTrainerSalesLoading || props.isTrainerCoursesLoading) {
        return (<CoursePerformanceContainer_1.default>
                <LeftSide_1.default>
                    <LeftSideTitle_1.default>
                        Courses
                    </LeftSideTitle_1.default>
                    <LeftSideContent_1.default className="hideScrollbar" style={{ padding: '1em' }}>
                        <InBlockSpinner_1.default>
                            <div className="spinner">

                            </div>
                        </InBlockSpinner_1.default>
                    </LeftSideContent_1.default>
                </LeftSide_1.default>
                <RightSide_1.default>
                    <RightSideTitle_1.default>
                        <FlexBox_1.default>
                            Performance
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            Week
                        </FlexBox_1.default>
                    </RightSideTitle_1.default>
                    <RightSideContent_1.default>
                        <InBlockSpinner_1.default>
                            <div className="spinner">

                            </div>
                        </InBlockSpinner_1.default>
                    </RightSideContent_1.default>
                </RightSide_1.default>
            </CoursePerformanceContainer_1.default>);
    }
    else {
        return (<CoursePerformanceContainer_1.default>
                <LeftSide_1.default>
                    <LeftSideTitle_1.default>
                        Courses
                    </LeftSideTitle_1.default>
                    <LeftSideContent_1.default className="hideScrollbar">
                        {props.courses.map(function (course) {
                return (<CourseListElement_1.default style={{ backgroundColor: selectedCourse === course ? theme_1.theme.colors.mainLightBlue : theme_1.theme.colors.white }} onClick={function () { setSelectedCourse(course); sortSales(props.sales, course.id, setSortedSales); }}>
                                    <FlexBox_1.default>
                                        {course.title}
                                    </FlexBox_1.default>
                                    <FlexBox_1.default>
                                        Mar 29
                                    </FlexBox_1.default>
                                </CourseListElement_1.default>);
            })}
                    </LeftSideContent_1.default>
                </LeftSide_1.default>
                <RightSide_1.default>
                    <RightSideTitle_1.default>
                        <FlexBox_1.default>
                            Performance
                        </FlexBox_1.default>
                        <FlexBox_1.default>
                            <select onChange={function (e) { setPerformanceTimePeriod(e.target.value); }} style={{ outline: 'none', border: 'none' }}>
                                <option value="W" style={{ outline: 'none', border: 'none' }}>
                                    Week
                                </option>
                                <option value="M" style={{ outline: 'none', border: 'none' }}>
                                    Month
                                </option>
                                {/* <option value="Y" style={{ outline: 'none', border: 'none'}}>
                Year
            </option> */}
                            </select>
                        </FlexBox_1.default>
                    </RightSideTitle_1.default>
                    <RightSideContent_1.default>
                        <ChartOptions_1.default>
                            {/* <ChartOptionTab theme={{ borderBottom: selectedOption === 0 ? `1px solid ${theme.colors.mainBlue}` : '' }} onClick={() => setSelectedOption(0)}>
                Active Users
            </ChartOptionTab>
            <ChartOptionTab theme={{ borderBottom: selectedOption === 1 ? `1px solid ${theme.colors.mainBlue}` : '' }} onClick={() => setSelectedOption(1)}>
                Revenue
            </ChartOptionTab> */}
                        </ChartOptions_1.default>
                        <ChartsContainer_1.default>
                            {renderCoursePerformanceChart(sortedSales, selectedCourse, performanceTimePeriod)}
                        </ChartsContainer_1.default>
                    </RightSideContent_1.default>
                </RightSide_1.default>
            </CoursePerformanceContainer_1.default>);
    }
};
exports.default = CoursePerformance;
