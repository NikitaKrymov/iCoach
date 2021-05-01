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
var FlexBox_1 = __importDefault(require("../../../../../elements/desktop/commonElements/FlexBox"));
var NewUsersBlockContainer_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/NewUsersBlock/NewUsersBlockContainer"));
var Text_1 = __importDefault(require("../../../../../elements/desktop/commonElements/Text"));
var theme_1 = require("../../../../../theme");
var DateSortHelpers_1 = require("../../../../../utils/DateSortHelpers");
var InBlockSpinner_1 = __importDefault(require("../../../../../elements/desktop/InBlockSpinner"));
var RevenueChart_1 = __importDefault(require("./RevenueChart"));
var DATE_ARRAY = [0, 7, 30, 6, 1];
var REVENUE_TEXT_THEME = {
    fontSize: '3em',
    alignItems: theme_1.theme.alignItems.flexStart
};
var COMPARE_REVENUE_TEXT_THEME = {
    alignItems: theme_1.theme.alignItems.center,
};
var FLEXBOX_THEME = {
    flexDirection: theme_1.theme.flexDirection.column,
    alignItems: theme_1.theme.alignItems.center,
    justifyContent: theme_1.theme.justifyContent.flexStart
};
var countTotalRevenue = function (sales) {
    var totalRevenue = 0;
    console.log(sales);
    sales.map(function (sale) {
        return totalRevenue += sale.price;
    });
    console.log('revenue', totalRevenue);
    return totalRevenue;
};
var countRevenueDifference = function (sales, totalRevenue, setRevenueDifference) {
    var revenueDifference = 0;
    setRevenueDifference(revenueDifference);
};
var renderWeekRevenue = function (sales) {
    var sortedArray = DateSortHelpers_1.sortArrayWeek(sales);
    var isPositive = true;
    return (<NewUsersBlockContainer_1.default style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
            <FlexBox_1.default theme={FLEXBOX_THEME}>
                <Text_1.default theme={REVENUE_TEXT_THEME}>
                    {countTotalRevenue(sortedArray)}$
                </Text_1.default>
                <Text_1.default theme={COMPARE_REVENUE_TEXT_THEME}>
                    <i style={{ color: isPositive ? '#88B360' : '#D60D04', fontSize: '1em' }} className={isPositive ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i> <div style={{ color: '#88B360', fontSize: '1.5em', marginLeft: '0.2em' }}></div>
                </Text_1.default>
            </FlexBox_1.default>
            <FlexBox_1.default>
                <RevenueChart_1.default last="Last Week" present="This Week" lastRevenue={30} presentRevenue={countTotalRevenue(sortedArray)}/>
            </FlexBox_1.default>
        </NewUsersBlockContainer_1.default>);
};
var renderMonthRevenue = function (sales) {
    var sortedArray = DateSortHelpers_1.sortArrayMonth(sales);
    var isPositive = true;
    return (<NewUsersBlockContainer_1.default style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
            <FlexBox_1.default theme={FLEXBOX_THEME}>
                <Text_1.default theme={REVENUE_TEXT_THEME}>
                    {countTotalRevenue(sortedArray)}$
                </Text_1.default>
                <Text_1.default theme={COMPARE_REVENUE_TEXT_THEME}>
                    <i style={{ color: isPositive ? '#88B360' : '#D60D04', fontSize: '1em' }} className={isPositive ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i> <div style={{ color: '#88B360', fontSize: '1.5em', marginLeft: '0.2em' }}></div>
                </Text_1.default>
            </FlexBox_1.default>
            <FlexBox_1.default>
                <RevenueChart_1.default last="Last Month" present="This Month" lastRevenue={150} presentRevenue={countTotalRevenue(sortedArray)}/>
            </FlexBox_1.default>
        </NewUsersBlockContainer_1.default>);
};
var DashboardRevenue = function (props) {
    var _a = react_1.useState(false), isPositive = _a[0], setIsPositive = _a[1];
    var _b = react_1.useState(0), revenueDifference = _b[0], setRevenueDifference = _b[1];
    var _c = react_1.useState([]), sortedSales = _c[0], setSortedSales = _c[1];
    if (props.isTrainerSalesLoading) {
        return (<InBlockSpinner_1.default>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner_1.default>);
    }
    else {
        switch (props.timePeriod) {
            default:
                return renderWeekRevenue(props.sales);
            case "M":
                return renderMonthRevenue(props.sales);
        }
    }
};
exports.default = DashboardRevenue;
