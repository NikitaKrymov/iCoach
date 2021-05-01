import { AuthCredentials } from '../../../interfaces/Interfaces';
import { AUTH_TRAINER_SUCCESS, AUTH_CLIENT_SUCCESS, AUTH_CLIENT_REQUEST, AUTH_TRAINER_REQUEST, AuthClientRequest, AuthTrainerRequest, AuthClientSuccess, AuthTrainerSuccess, AuthorizeUserRequest, AUTHORIZE_USER_REQUEST, AuthorizeUserSuccess, AUTHORIZE_USER_SUCCESS, AuthrorizeUserFail, AUTHORIZE_USER_FAIL } from '../types/authActionInterfaces'

export const authenticateTrainerRequest = (credentials: AuthCredentials): AuthTrainerRequest => ({
    type: AUTH_TRAINER_REQUEST,
    payload: credentials
});

export const authenticateClientRequest = (credentials: AuthCredentials): AuthClientRequest => ({
    type: AUTH_CLIENT_REQUEST,
    payload: credentials
});

export const authenticateClientSuccess = (userData: any): AuthClientSuccess => ({
    type: AUTH_CLIENT_SUCCESS,
    payload: userData,
});

export const authenticateTrainerSuccess = (userData: any): AuthTrainerSuccess => ({
    type: AUTH_TRAINER_SUCCESS,
    payload: userData,
});

export const authorizeUserRequest = (): AuthorizeUserRequest => ({
    type: AUTHORIZE_USER_REQUEST
});

export const authorizeUserSuccess = (userData: any): AuthorizeUserSuccess => ({
    type: AUTHORIZE_USER_SUCCESS,
    payload: userData
});

export const authorizeUserFail = (): AuthrorizeUserFail => ({
    type: AUTHORIZE_USER_FAIL
});