import { takeLatest, call, put, select } from 'redux-saga/effects';
import { authenticateClientSuccess, authenticateTrainerSuccess, authorizeUserFail } from '../actions/authActions';
import { AuthorizeUserRequest, AUTHORIZE_USER_REQUEST, AUTH_CLIENT_REQUEST, AUTH_TRAINER_REQUEST } from '../types/authActionInterfaces';
import { CREATE_NEW_COURSE_REQUEST, FETCH_TRAINER_CLIENTS_REQUEST, FETCH_TRAINER_COURSES_REQUEST, FETCH_TRAINER_SALES_REQUEST } from '../types/trainerActionTypes';
import iCoachAPI from '../utils/iCoachAPI';
import { authClient } from './clientSagas';
import { authTrainer, createNewCourse, fetchTrainerClients, fetchTrainerCourses, fetchTrainerSales } from './trainerSagas';

function* authorizeUser(action: AuthorizeUserRequest) {
    const response = yield call(() => iCoachAPI.get('/current_user'));
    console.log(response);
    if (response.data.userType) {
        switch (response.data.useType) {
            case "TRAINER":
                return yield put(authenticateTrainerSuccess(response.data))
            default: 
                return yield put(authenticateClientSuccess(response.data));
        }
    } else {
        yield put(authorizeUserFail());
    }
}

export default function* rootSaga(){
    yield console.log('Root Saga is connected');
    yield takeLatest(FETCH_TRAINER_CLIENTS_REQUEST, fetchTrainerClients);
    yield takeLatest(FETCH_TRAINER_COURSES_REQUEST, fetchTrainerCourses);
    yield takeLatest(FETCH_TRAINER_SALES_REQUEST, fetchTrainerSales);
    yield takeLatest(CREATE_NEW_COURSE_REQUEST, createNewCourse);
    yield takeLatest(AUTH_TRAINER_REQUEST, authTrainer);
    yield takeLatest(AUTH_CLIENT_REQUEST, authClient);
    yield takeLatest(AUTHORIZE_USER_REQUEST, authorizeUser);
}