import { AppActions } from "../types/actionInterfaces";
import { LoadingReducer} from '../../../interfaces/reducerInterfaces/LoadingInterface';
import { FETCH_TRAINER_CLIENTS_REQUEST, FETCH_TRAINER_CLIENTS_SUCCESS, FETCH_TRAINER_COURSES_REQUEST, FETCH_TRAINER_COURSES_SUCCESS, FETCH_TRAINER_SALES_REQUEST, FETCH_TRAINER_SALES_SUCCESS } from "../types/trainerActionTypes";
const Initial_State: LoadingReducer = {
    isTrainerClientsLoading: true,
    isTrainerCoursesLoading: true,
    isTrainerSalesLoading: true
}

export const loadingReducer = (state = Initial_State, action: AppActions) => {
    switch(action.type){
        case FETCH_TRAINER_CLIENTS_SUCCESS:
            return { ...state, isTrainerClientsLoading: false};
        case FETCH_TRAINER_CLIENTS_REQUEST:
            return { ...state, isTrainerClientsLoading: true};
        case FETCH_TRAINER_COURSES_REQUEST: 
            return { ...state, isTrainerCoursesLoading: true};
        case FETCH_TRAINER_COURSES_SUCCESS:
            return { ...state, isTrainerCoursesLoading: false};
        case FETCH_TRAINER_SALES_REQUEST: 
            return { ...state, isTrainerSalesLoading: true};
        case FETCH_TRAINER_SALES_SUCCESS: 
            return { ...state, isTrainerSalesLoading: false};
        default: 
            return state;
    }
}