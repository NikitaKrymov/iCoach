import { Client } from "../clientInterfaces/Client";
import { Course } from "../courseInterfaces/Course";
import { Sale } from "../Interfaces";

export interface AppReducer {
    authStatus: boolean,
    userType?: any,
    clients?: any,
    courses?: any,
    sales?: any,
    userData?: any
}