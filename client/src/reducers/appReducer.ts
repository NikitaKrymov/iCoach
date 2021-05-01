import _ from 'lodash';
import { AppReducer } from '../../../interfaces/reducerInterfaces/AppInterface';
import { AUTH_CLIENT_SUCCESS, AUTH_TRAINER_SUCCESS } from '../types/authActionInterfaces';
import { CLIENT_FETCH_DATA_SUCCESS } from '../types/clientActionTypes';
import { FETCH_TRAINER_CLIENTS_SUCCESS, FETCH_TRAINER_COURSES_SUCCESS, FETCH_TRAINER_SALES_SUCCESS, TRAINER_FETCH_DATA_SUCCESS } from '../types/trainerActionTypes';

const Initial_State: AppReducer = {
    authStatus: false,
}

export const appReducer = (state = Initial_State, action: any) => {
    switch (action.type){
        case AUTH_TRAINER_SUCCESS: 
            return { ...state, authStatus: true, userType: "TRAINER", userData: { id: 'TrainerID' } };
        case AUTH_CLIENT_SUCCESS:
            return { ...state, authStatus: true, userType: "CLIENT" , userData: { id: 'ClientID' } };
        case TRAINER_FETCH_DATA_SUCCESS: 
            return { ...state, userData: action.payload };
        case CLIENT_FETCH_DATA_SUCCESS: 
            return { ...state, userData: action.payload };
        case FETCH_TRAINER_CLIENTS_SUCCESS: 
            return { ...state, clients: action.payload };
        case FETCH_TRAINER_COURSES_SUCCESS: 
            return { ...state, courses: action.payload };
        case FETCH_TRAINER_SALES_SUCCESS:
            return { ...state, sales: action.payload };
        default:
            return state;
    }
}