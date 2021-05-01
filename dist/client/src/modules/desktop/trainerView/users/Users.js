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
var UsersContainer_1 = __importDefault(require("../../../../elements/desktop/usersElements/UsersContainer"));
var UsersListContainer_1 = __importDefault(require("../../../../elements/desktop/usersElements/UsersListContainer"));
var UserListElement_1 = __importDefault(require("./UserListElement"));
var UserSearchBar_1 = __importDefault(require("./UserSearchBar"));
require("../../../../css/main.css");
var UserProfile_1 = __importDefault(require("./UserProfile"));
var react_redux_1 = require("react-redux");
var trainerActions_1 = require("../../../../actions/trainerActions");
var InBlockSpinner_1 = __importDefault(require("../../../../elements/desktop/InBlockSpinner"));
var Users = function (props) {
    var _a = react_1.useState({}), userCard = _a[0], setUserCard = _a[1];
    react_1.useEffect(function () {
        props.fetchUsers(props.trainerId);
    }, []);
    if (props.isTrainerClientsLoading) {
        return (<InBlockSpinner_1.default>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner_1.default>);
    }
    else {
        console.log(props.users);
        return (<UsersContainer_1.default>
                <FlexBox_1.default theme={{ flexDirection: 'column' }}>
                    <FlexBox_1.default>
                        <UserSearchBar_1.default />
                    </FlexBox_1.default>
                    <FlexBox_1.default />
                    <FlexBox_1.default style={{ margin: '1em 0 -1em 4em' }}>
                        Name
                    </FlexBox_1.default>
                    {props.users.map(function (user) {
                return (<UsersListContainer_1.default onClick={function () { return setUserCard(user); }} className="hideScrollbar">
                                <UserListElement_1.default user={user}/>
                            </UsersListContainer_1.default>);
            })}
                </FlexBox_1.default>
                <FlexBox_1.default>
                    <UserProfile_1.default userCard={userCard}/>
                </FlexBox_1.default>
            </UsersContainer_1.default>);
    }
};
var mapStateToProps = function (state) { return ({
    users: state.app.clients,
    trainerId: state.app.userData.id,
    isTrainerClientsLoading: state.isLoading.isTrainerClientsLoading
}); };
var mapDispatchToProps = function (dispatch) { return ({
    fetchUsers: function (trainerId) { return dispatch(trainerActions_1.fetchTrainerClientsRequest(trainerId)); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Users);
