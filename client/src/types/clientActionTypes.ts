import { Client } from "../../../interfaces/clientInterfaces/Client";

export const CLIENT_FETCH_DATA_SUCCESS = "CLIENT_FETCH_DATA_SUCCESS";
export const CLIENT_FETCH_DATA_REQUEST = "CLIENT_FETCH_DATA_REQUEST";
export const CLIENT_FETCH_DATA_FAIL = "CLIENT_FETCH_DATA_FAIL";


export interface ClientFetchDataRequest {
    type: typeof CLIENT_FETCH_DATA_REQUEST,
}

export interface ClientFetchDataSuccess {
    type: typeof CLIENT_FETCH_DATA_SUCCESS,
    payload: Client
}

export interface ClientFetchDataFail {
    type: typeof CLIENT_FETCH_DATA_FAIL,
}

export type ClientActionTypes = ClientFetchDataFail | ClientFetchDataRequest | ClientFetchDataSuccess;