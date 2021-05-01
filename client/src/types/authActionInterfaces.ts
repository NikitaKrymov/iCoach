import { Client } from "../../../interfaces/clientInterfaces/Client";
import { AuthCredentials } from "../../../interfaces/Interfaces";
import { Trainer } from "../../../interfaces/trainerInterfaces/Trainer";

export const AUTH_TRAINER_SUCCESS = "AUTH_TRAINER_SUCCESS";
export const AUTH_CLIENT_SUCCESS = "AUTH_CLIENT_SUCCESS";
export const AUTH_TRAINER_REQUEST = 'AUTH_TRAINER_REQUEST';
export const AUTH_TRAINER_FAIL = 'AUTH_TRAINER_FAIL';
export const AUTH_CLIENT_REQUEST = 'AUTH_CLIENT_REQUEST';
export const AUTH_CLIENT_FAIL = 'AUTH_CLIENT_FAIL';
export const AUTHORIZE_USER_REQUEST = 'AUTHORIZE_USER_REQUEST';
export const AUTHORIZE_USER_SUCCESS = 'AUTHORIZE_USER_SUCCESS';
export const AUTHORIZE_USER_FAIL = 'AUHTORIZE_USER_FAIL';

export interface AuthTrainerSuccess {
    type: typeof AUTH_TRAINER_SUCCESS,
    payload: Trainer
}

export interface AuthClientSuccess {
    type: typeof AUTH_CLIENT_SUCCESS,
    payload: Client
}

export interface AuthClientRequest {
    type: typeof AUTH_CLIENT_REQUEST,
    payload: AuthCredentials
}

export interface AuthClientFail {
    type: typeof AUTH_CLIENT_FAIL
}

export interface AuthTrainerRequest {
    type: typeof AUTH_TRAINER_REQUEST,
    payload: AuthCredentials
}

export interface AuthTrainerFail {
    type: typeof AUTH_TRAINER_FAIL
}

export interface AuthorizeUserRequest {
    type: typeof AUTHORIZE_USER_REQUEST
}

export interface AuthorizeUserSuccess {
    type: typeof AUTHORIZE_USER_SUCCESS,
    payload: any
}

export interface AuthrorizeUserFail {
    type: typeof AUTHORIZE_USER_FAIL
}

export type AuthActions = AuthTrainerFail | AuthTrainerRequest | AuthTrainerSuccess |
AuthClientFail | AuthClientRequest | AuthClientSuccess |
AuthrorizeUserFail | AuthorizeUserRequest | AuthorizeUserSuccess;