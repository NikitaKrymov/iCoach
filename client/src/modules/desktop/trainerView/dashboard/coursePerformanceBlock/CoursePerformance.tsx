import React from "react";
import { Course } from "../../../../../../../interfaces/courseInterfaces/Course";
import { Sale } from "../../../../../../../interfaces/Interfaces";
import FlexBox from "../../../../../elements/desktop/commonElements/FlexBox";
import ChartOptions from "../../../../../elements/desktop/dashboardElements/CourseAnalize/ChartOptions";
import ChartOptionTab from "../../../../../elements/desktop/dashboardElements/CourseAnalize/ChartOptionTab";
import ChartsContainer from "../../../../../elements/desktop/dashboardElements/CourseAnalize/ChartsContainer";
import CourseListElement from "../../../../../elements/desktop/dashboardElements/CourseAnalize/CourseListElement";
import CoursePerformanceContainer from "../../../../../elements/desktop/dashboardElements/CourseAnalize/CoursePerformanceContainer";
import LeftSide from "../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSide";
import LeftSideContent from "../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSideContent";
import LeftSideTitle from "../../../../../elements/desktop/dashboardElements/CourseAnalize/LeftSideTitle";
import RightSide from "../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSide";
import RightSideContent from "../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSideContent";
import RightSideTitle from "../../../../../elements/desktop/dashboardElements/CourseAnalize/RightSideTitle";
import InBlockSpinner from "../../../../../elements/desktop/InBlockSpinner";
import { theme } from "../../../../../theme";
import CoursePerformanceMonthly from "./CoursePerformanceMonthly";
import CoursePerformanceWeekly from "./CoursePerformanceWeekly";

const renderCoursePerformanceChart = (sales: Sale[] | {}, selectedCourse: Course | {}, performanceTimePeriod: string) => {
    switch(performanceTimePeriod){
        default: 
            return <CoursePerformanceWeekly sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>
        case "M":
            return <CoursePerformanceMonthly sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>
        case "Y":
            return <CoursePerformanceWeekly sales={sales} course={selectedCourse} timePeriod={performanceTimePeriod}/>
    }
}

const sortSales = (sales: Sale[], courseId: string, setSortedSales: React.Dispatch<React.SetStateAction<Sale[]>>) => {
    console.log(courseId, sales);
    const sortedSales = sales.filter((sale) => {
        if (sale.courseId === courseId) {
            console.log(sale);
            return sale;
        }
    }).sort((a, b) => {
        return a.date.getDate() - b.date.getDate();
    })
    console.log(sortedSales);
    setSortedSales(sortedSales);
}

interface Props {
    isTrainerCoursesLoading?: boolean,
    isTrainerSalesLoading?: boolean,
    courses: Course[],
    trainerId: string,
    sales: Sale[]
}

const CoursePerformance: React.FC<Props> = (props) => {

    const [selectedCourse, setSelectedCourse] = React.useState({ _id: ''});
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [performanceTimePeriod, setPerformanceTimePeriod] = React.useState("W");
    const [sortedSales, setSortedSales] = React.useState({});

    console.log(sortedSales);

    if (props.isTrainerSalesLoading || props.isTrainerCoursesLoading){
        return(
            <CoursePerformanceContainer>
                <LeftSide >
                    <LeftSideTitle>
                        Courses
                    </LeftSideTitle>
                    <LeftSideContent className="hideScrollbar" style={{ padding: '1em' }}>
                        <InBlockSpinner>
                            <div className="spinner">

                            </div>
                        </InBlockSpinner>
                    </LeftSideContent>
                </LeftSide>
                <RightSide>
                    <RightSideTitle>
                        <FlexBox>
                            Performance
                        </FlexBox>
                        <FlexBox>
                            Week
                        </FlexBox>
                    </RightSideTitle>
                    <RightSideContent>
                        <InBlockSpinner>
                            <div className="spinner">

                            </div>
                        </InBlockSpinner>
                    </RightSideContent>
                </RightSide>
            </CoursePerformanceContainer>
        );
    } else {
        return (
            <CoursePerformanceContainer>
                <LeftSide >
                    <LeftSideTitle>
                        Courses
                    </LeftSideTitle>
                    <LeftSideContent className="hideScrollbar">
                        {props.courses.map((course, i) => {
                            return(
                                <CourseListElement key={i} style={{ backgroundColor: selectedCourse === course ? theme.colors.mainLightBlue : theme.colors.white }} onClick={() => { setSelectedCourse(course); sortSales(props.sales, course._id, setSortedSales)} }>
                                    <FlexBox>
                                        {course.title}
                                    </FlexBox>
                                    <FlexBox>
                                        Mar 29
                                    </FlexBox>
                                </CourseListElement>
                            );
                        })}
                    </LeftSideContent>
                </LeftSide>
                <RightSide>
                    <RightSideTitle>
                        <FlexBox>
                            Performance
                        </FlexBox>
                        <FlexBox>
                            <select onChange={(e) => { setPerformanceTimePeriod(e.target.value)}} style={{ outline: 'none', border: 'none' }}>
                                <option value="W" style={{ outline: 'none', border: 'none'}}>
                                    Week
                                </option>
                                <option value="M" style={{ outline: 'none', border: 'none'}}>
                                    Month
                                </option>
                                {/* <option value="Y" style={{ outline: 'none', border: 'none'}}>
                                    Year
                                </option> */}
                            </select>
                        </FlexBox>
                    </RightSideTitle>
                    <RightSideContent>
                        <ChartOptions>
                            {/* <ChartOptionTab theme={{ borderBottom: selectedOption === 0 ? `1px solid ${theme.colors.mainBlue}` : '' }} onClick={() => setSelectedOption(0)}>
                                Active Users
                            </ChartOptionTab>
                            <ChartOptionTab theme={{ borderBottom: selectedOption === 1 ? `1px solid ${theme.colors.mainBlue}` : '' }} onClick={() => setSelectedOption(1)}>
                                Revenue
                            </ChartOptionTab> */}
                        </ChartOptions>
                        <ChartsContainer>
                            {renderCoursePerformanceChart(sortedSales, selectedCourse, performanceTimePeriod)}
                        </ChartsContainer>
                    </RightSideContent>
                </RightSide>
            </CoursePerformanceContainer>
        );
    }
}

export default CoursePerformance;