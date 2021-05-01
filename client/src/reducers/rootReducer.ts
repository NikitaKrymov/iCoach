import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    isLoading: loadingReducer
});

export type AppState = ReturnType<typeof rootReducer>