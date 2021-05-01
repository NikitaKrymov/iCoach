import { Client } from "../../../interfaces/clientInterfaces/Client";
import { CLIENT_FETCH_DATA_FAIL, CLIENT_FETCH_DATA_REQUEST, CLIENT_FETCH_DATA_SUCCESS } from "../types/clientActionTypes";

export const fetchClientDataRequest = () => ({
    type: CLIENT_FETCH_DATA_REQUEST
});

export const fetchClientDataSuccess = (userData: Client) => ({
    type: CLIENT_FETCH_DATA_SUCCESS,
    payload: userData
});

export const fetchClientDataFail = () => ({
    type: CLIENT_FETCH_DATA_FAIL,
});