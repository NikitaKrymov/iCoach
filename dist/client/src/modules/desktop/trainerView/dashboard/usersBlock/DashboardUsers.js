"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var UsersBlockContent_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/UsersBlock/UsersBlockContent"));
var InBlockSpinner_1 = __importDefault(require("../../../../../elements/desktop/InBlockSpinner"));
var PieChartClass_1 = __importDefault(require("./PieChartClass"));
var TotalUsersPieChart_1 = __importDefault(require("./TotalUsersPieChart"));
var DashboardUsers = function (props) {
    react_1.default.useEffect(function () {
        props.fetchTrainerClients(props.trainerId);
        console.log('Fetching Trainer CLients', props.trainerId);
    }, []);
    if (props.isTrainerClientsLoading) {
        return (<InBlockSpinner_1.default>
                <div className="spinner">

                </div>
            </InBlockSpinner_1.default>);
    }
    else {
        console.log(props.clients);
        return (<UsersBlockContent_1.default>            
                <TotalUsersPieChart_1.default totalClients={props.clients.length}/>
                <PieChartClass_1.default data={[{ name: 'Active Users', value: props.clients.length }, { name: 'Unactive Users', value: 45 }]}/>
                {/* <CircleData percentage={100} title="Total Users" label="100" circleColor={theme.colors.primary} />
            <CircleData percentage={47} title="Active Users" label="47" circleColor={theme.colors.green} /> */}
            </UsersBlockContent_1.default>);
    }
};
exports.default = DashboardUsers;
