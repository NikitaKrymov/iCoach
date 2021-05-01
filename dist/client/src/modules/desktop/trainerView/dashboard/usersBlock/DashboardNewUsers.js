"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NewUsersBlockContainer_1 = __importDefault(require("../../../../../elements/desktop/dashboardElements/NewUsersBlock/NewUsersBlockContainer"));
var ActiveUsersChart_1 = __importDefault(require("./ActiveUsersChart"));
var InBlockSpinner_1 = __importDefault(require("../../../../../elements/desktop/InBlockSpinner"));
var DashboardNewUsers = function (props) {
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
        return (<NewUsersBlockContainer_1.default>
                <ActiveUsersChart_1.default />
                {/* <FlexBox theme={{ alignItems: 'center' }}>
                Last Week
                <Text theme={NEW_USERS_NUMBER_THEME}>
                    15
                </Text>
            </FlexBox>
            <FlexBox>
                <Text theme={COMPARE_NEW_USERS_NUMBER_THEME}>
                    <i style={{ color: 'green', fontSize: '2em' }} className="fas fa-angle-double-up"></i> <div style={{ fontSize: '3em', marginLeft: '0.2em' }}>6</div>
                </Text>
            </FlexBox> */}
            </NewUsersBlockContainer_1.default>);
    }
};
exports.default = DashboardNewUsers;
