"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var history_1 = __importDefault(require("./history"));
var Course_1 = __importDefault(require("./modules/desktop/trainerView/course/Course"));
var CourseSettings_1 = __importDefault(require("./modules/desktop/trainerView/course/CourseSettings"));
var Account_1 = __importDefault(require("./modules/desktop/trainerView/account/Account"));
var Lesson_1 = __importDefault(require("./modules/desktop/trainerView/lesson/Lesson"));
var Users_1 = __importDefault(require("./modules/desktop/trainerView/users/Users"));
var Support_1 = __importDefault(require("./modules/desktop/trainerView/support/Support"));
var Programs_1 = __importDefault(require("./modules/desktop/trainerView/programs/Programs"));
var Dashboard_1 = __importDefault(require("./modules/desktop/trainerView/dashboard/Dashboard"));
var createRoutes = function () { return (<react_router_dom_1.Router history={history_1.default}>
        <react_router_dom_1.Route path='/' exact component={Dashboard_1.default}/>
        <react_router_dom_1.Route path='/programs' exact component={Programs_1.default}/>
        <react_router_dom_1.Route path='/programs/:id/settings' exact component={CourseSettings_1.default}/>
        <react_router_dom_1.Route path='/programs/:id' exact component={Course_1.default}/>
        <react_router_dom_1.Route path='/programs/:id/:id' exact component={Lesson_1.default}/>
        <react_router_dom_1.Route path='/clients' exact component={Users_1.default}/>
        <react_router_dom_1.Route path='/profile' exact component={Account_1.default}/>
        <react_router_dom_1.Route path='/support' exact component={Support_1.default}/>
    </react_router_dom_1.Router>); };
exports.createRoutes = createRoutes;
