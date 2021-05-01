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
var FlexBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/FlexBox"));
var BlockTitle_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/BlockTitle"));
var DashboardBlock_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/DashboardBlock"));
var DashboardContainer_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/DashboardContainer"));
var DashboardTopRowContainer_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/DashboardTopRowContainer"));
var theme_1 = require("../../../../theme");
var DashboardRevenue_1 = __importDefault(require("./revenueBlock/DashboardRevenue"));
var DashboardUsers_1 = __importDefault(require("./usersBlock/DashboardUsers"));
var react_redux_1 = require("react-redux");
var trainerActions_1 = require("../../../../actions/trainerActions");
var CoursePerformance_1 = __importDefault(require("./coursePerformanceBlock/CoursePerformance"));
var SalesContainer_1 = __importDefault(require("../../../../elements/desktop/dashboardElements/SalesBlock/SalesContainer"));
var NEW_USERS_TITLE_FLEXBOX = {
    justifyContent: theme_1.theme.justifyContent.sb
};
var Dashboard = function (props) {
    react_1.default.useEffect(function () {
        props.fetchTrainerCourses(props.trainerId);
        props.fetchTrainerSales(props.trainerId);
    }, []);
    var _a = react_1.useState(0), userBlockTimePeriod = _a[0], setUserBlockTimePeriod = _a[1];
    var _b = react_1.useState(0), activeUserBlockTimePeriod = _b[0], setActiveUserBlockTimePeriod = _b[1];
    var _c = react_1.useState("W"), revenueBlockTimePeriod = _c[0], setRevenueBlockTimePeriod = _c[1];
    return (<DashboardContainer_1.default>
            <DashboardTopRowContainer_1.default>
                <DashboardBlock_1.default>
                    <BlockTitle_1.default>
                        Users
                    </BlockTitle_1.default>
                    <DashboardUsers_1.default timePeriod={userBlockTimePeriod} isTrainerClientsLoading={props.isTrainerClientsLoading} clients={props.users} fetchTrainerClients={props.fetchTrainerClients} trainerId={props.trainerId}/>
                </DashboardBlock_1.default>
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
                <DashboardBlock_1.default>
                <BlockTitle_1.default>
                        <FlexBox_1.default theme={NEW_USERS_TITLE_FLEXBOX} style={{ width: '100%' }}>
                            <FlexBox_1.default>
                                Revenue
                            </FlexBox_1.default>
                            <FlexBox_1.default>
                                <select onChange={function (e) { return setRevenueBlockTimePeriod(e.target.value); }} style={{ outline: 'none', border: 'none' }}>
                                    <option value="W" style={{ outline: 'none', border: 'none' }}>
                                        Week
                                    </option>
                                    <option value="M" style={{ outline: 'none', border: 'none' }}>
                                        Month
                                    </option>
                                    <option value="Y" style={{ outline: 'none', border: 'none' }}>
                                        Year
                                    </option>
                                </select>
                            </FlexBox_1.default>
                        </FlexBox_1.default>
                    </BlockTitle_1.default>
                    <DashboardRevenue_1.default timePeriod={revenueBlockTimePeriod} isTrainerSalesLoading={props.isTrainerSalesLoading} sales={props.sales}/>
                </DashboardBlock_1.default>
            </DashboardTopRowContainer_1.default>
            <CoursePerformance_1.default sales={props.sales} isTrainerSalesLoading={props.isTrainerSalesLoading} isTrainerCoursesLoading={props.isTrainerCoursesLoading} courses={props.courses} trainerId={props.trainerId}/>
            <SalesContainer_1.default>
                Test
            </SalesContainer_1.default>
        </DashboardContainer_1.default>);
};
var mapStateToProps = function (state) { return ({
    users: state.app.clients,
    sales: state.app.sales,
    courses: state.app.courses,
    isTrainerClientsLoading: state.isLoading.isTrainerClientsLoading,
    isTrainerCoursesLoading: state.isLoading.isTrainerCoursesLoading,
    isTrainerSalesLoading: state.isLoading.isTrainerSalesLoading,
    trainerId: state.app.userData.id
}); };
var mapStateToDispatch = function (dispatch) { return ({
    fetchTrainerClients: function (trainerId) { return dispatch(trainerActions_1.fetchTrainerClientsRequest(trainerId)); },
    fetchTrainerCourses: function (trainerId) { return dispatch(trainerActions_1.fetchTrainerCoursesRequest(trainerId)); },
    fetchTrainerSales: function (trainerId) { return dispatch(trainerActions_1.fetchTrainerSalesRequest(trainerId)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapStateToDispatch)(Dashboard);
