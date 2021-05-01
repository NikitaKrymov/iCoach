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
var ProgramElement_1 = __importDefault(require("./ProgramElement"));
require("../../../../css/main.css");
var ProgramsContainer_1 = __importDefault(require("../../../../elements/desktop/programsElements/ProgramsContainer"));
var GridBox_1 = __importDefault(require("../../../../elements/desktop/commonElements/GridBox"));
var ProgramsTabBar_1 = __importDefault(require("./ProgramsTabBar"));
var react_redux_1 = require("react-redux");
var InBlockSpinner_1 = __importDefault(require("../../../../elements/desktop/InBlockSpinner"));
var trainerActions_1 = require("../../../../actions/trainerActions");
var renderProgramList = function (courses) {
    return courses.map(function (e, i) {
        return (<ProgramElement_1.default course={e} key={i}/>);
    });
};
var Dashboard = function (props) {
    react_1.useEffect(function () {
        props.fetchCourses(props.trainerId);
    }, []);
    if (props.isTrainerCoursesLoading) {
        return (<InBlockSpinner_1.default>
                <div className="spinner">
                    
                </div>
            </InBlockSpinner_1.default>);
    }
    else {
        return (<GridBox_1.default theme={{ gridTemplateRows: '1fr 20fr' }}>
                <ProgramsTabBar_1.default />
                <ProgramsContainer_1.default className="hideScrollbar" style={{ position: 'relative', overflowY: 'scroll' }}>
                        {renderProgramList(props.courses)}
                </ProgramsContainer_1.default>
            </GridBox_1.default>);
    }
};
var mapStateToProps = function (state) { return ({
    courses: state.app.courses,
    isTrainerCoursesLoading: state.isLoading.isTrainerCoursesLoading,
    trainerId: state.app.userData.id
}); };
var mapDispatchToProps = function (dispatch) { return ({
    fetchCourses: function (trainerId) { return dispatch(trainerActions_1.fetchTrainerCoursesRequest(trainerId)); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Dashboard);
