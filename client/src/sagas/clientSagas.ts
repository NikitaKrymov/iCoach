import { call } from "redux-saga/effects";
import { AuthClientRequest } from "../types/authActionInterfaces";
import iCoachAPI from "../utils/iCoachAPI";

export function* authClient(action: AuthClientRequest) {
    const response = yield call(() => iCoachAPI.post('/authClient', action.payload));
    console.log(response);
}