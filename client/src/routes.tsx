import { Router, Route } from 'react-router-dom';
import history from './history';
import Course from './modules/desktop/trainerView/course/Course';
import CourseSettings from './modules/desktop/trainerView/course/CourseSettings';
import Account from './modules/desktop/trainerView/account/Account';
import Lesson from './modules/desktop/trainerView/lesson/Lesson';
import Users from './modules/desktop/trainerView/users/Users';
import Support from './modules/desktop/trainerView/support/Support';
import Programs from './modules/desktop/trainerView/programs/Programs';
import Dashboard from './modules/desktop/trainerView/dashboard/Dashboard';
import ClientRegistrationPage from './modules/desktop/ClientRegistrationPage';
import AuthPage from './modules/desktop/AuthPage';
import NewCourse from './modules/desktop/trainerView/course/NewCourse';

export const createRoutes = () => (
    <Router history={history}>
        <Route path='/' exact component={Dashboard} />
        <Route path='/programs' exact component={Programs} />
        <Route path='/programs/:id/settings' exact component={CourseSettings} />
        <Route path='/programs/:id' exact component={Course} />
        <Route path='/programs/:id/lesson/:id' exact component={Lesson} />
        <Route path='/clients' exact component={Users} />
        <Route path='/profile' exact component={Account}/>
        <Route path='/support' exact component={Support}/>
        <Route path='/registerNewUser/:trainerID' exact component={ClientRegistrationPage} />
        <Route path='/auth' exact component={AuthPage} />
        <Route path='/createNewCourse' exact component={NewCourse} />
    </Router>
);