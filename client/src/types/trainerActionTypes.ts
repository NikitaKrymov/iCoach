import { Client } from "../../../interfaces/clientInterfaces/Client";
import { Course } from "../../../interfaces/courseInterfaces/Course";
import { NewCourse } from '../../../interfaces/courseInterfaces/NewCourse';
import { Sale } from "../../../interfaces/Interfaces";
import { Trainer } from "../../../interfaces/trainerInterfaces/Trainer";

export const TRAINER_FETCH_DATA_SUCCESS = "TRAINER_FETCH_DATA_SUCCESS";
export const TRAINER_FETCH_DATA_REQUEST = "TRAINER_FETCH_DATA_REQUEST";
export const TRAINER_FETCH_DATA_FAIL = "TRAINER_FETCH_DATA_FAIL";


export const FETCH_TRAINER_CLIENTS_REQUEST = 'FETCH_TRAINER_CLIENTS_REQUEST';
export const FETCH_TRAINER_CLIENTS_SUCCESS = 'FETCH_TRAINER_CLIENTS_SUCCESS';
export const FETCH_TRAINER_CLIENTS_FAIL = 'FETCH_TRAINER_CLIENTS_FAIL';


export const FETCH_TRAINER_COURSES_REQUEST = 'FETCH_TRAINER_COURSES_REQUEST';
export const FETCH_TRAINER_COURSES_SUCCESS = 'FETCH_TRAINER_COURSES_SUCCESS';
export const FETCH_TRAINER_COURSES_FAIL = 'FETCH_TRAINER_COURSES_FAIL';

export const FETCH_TRAINER_SALES_REQUEST = 'FETCH_TRAINER_SALES_REQUEST';
export const FETCH_TRAINER_SALES_SUCCESS = 'FETCH_TRAINER_SALES_SUCCESS';
export const FETCH_TRAINER_SALES_FAIL = 'FETCH_TRAINER_SALES_FAIL';

export const CREATE_NEW_COURSE_REQUEST = 'CREATE_NEW_COURSE_REQUEST';
export const CREATE_NEW_COURSE_SUCCESS = 'CREATE_NEW_COURSE_SUCCESS';
export const CREATE_NEW_COURSE_FAIL = 'CREATE_NEW_COURSE_FAIL';

export const UPLOAD_BACKGROUND_IMAGE_FILE_REQUEST = 'UPLOAD_BACKGROUND_IMAGE_FILE_REQUEST';
export const UPLOAD_BACKGROUND_IMAGE_FILE_SUCCESS = 'UPLOAD_BACKGROUND_IMAGE_FILE_SUCCESS';
export const UPLOAD_BACKGROUND_IMAGE_FILE_FAIL = 'UPLOAD_BACKGROUND_IMAGE_FILE_FAIL';


export interface TrainerFetchDataRequest {
    type: typeof TRAINER_FETCH_DATA_REQUEST,
}

export interface TrainerFetchDataSuccess {
    type: typeof TRAINER_FETCH_DATA_SUCCESS,
    payload: Trainer
}

export interface TrainerFetchDataFail {
    type: typeof TRAINER_FETCH_DATA_FAIL,
}

export interface TrainerFetchClientsRequest {
    type: typeof FETCH_TRAINER_CLIENTS_REQUEST,
    payload: string
}

export interface TrainerFetchClientsSuccess {
    type: typeof FETCH_TRAINER_CLIENTS_SUCCESS,
    payload: Client[]
}

export interface TrainerFetchClientsFail {
    type: typeof FETCH_TRAINER_CLIENTS_FAIL
}

export interface TrainerFetchCoursesRequest {
    type: typeof FETCH_TRAINER_COURSES_REQUEST,
    payload: string
}

export interface TrainerFetchCoursesSuccess {
    type: typeof FETCH_TRAINER_COURSES_SUCCESS,
    payload: Course[]
}

export interface TrainerFetchCoursesFail {
    type: typeof FETCH_TRAINER_COURSES_FAIL
}

export interface TrainerFetchSalesRequest {
    type: typeof FETCH_TRAINER_SALES_REQUEST,
    payload: string
}

export interface TrainerFetchSalesSuccess {
    type: typeof FETCH_TRAINER_SALES_SUCCESS,
    payload: Sale[]
}

export interface TrainerFetchSalesFail {
    type: typeof FETCH_TRAINER_SALES_FAIL
}

export interface CreateNewCourseRequest {
    type: typeof CREATE_NEW_COURSE_REQUEST,
    payload: {
        newCourse: NewCourse,
        image: any
    }
}

export interface CreateNewCourseSuccess {
    type: typeof CREATE_NEW_COURSE_SUCCESS,
    payload: Course
}

export interface CreateNewCourseFail {
    type: typeof CREATE_NEW_COURSE_FAIL,
}

export interface UploadBackgroundImageFileRequest {
    type: typeof UPLOAD_BACKGROUND_IMAGE_FILE_REQUEST,
    payload: any
}

export interface UploadBackgroundImageFileSuccess {
    type: typeof UPLOAD_BACKGROUND_IMAGE_FILE_SUCCESS,
    payload: string
}

export interface UploadBackgroundImageFileFail {
    type: typeof UPLOAD_BACKGROUND_IMAGE_FILE_FAIL,
}

export type TrainerActionTypes = 
TrainerFetchDataFail | TrainerFetchDataRequest | TrainerFetchDataSuccess | 
TrainerFetchClientsRequest | TrainerFetchClientsSuccess | TrainerFetchClientsFail |
TrainerFetchCoursesFail | TrainerFetchCoursesRequest | TrainerFetchCoursesSuccess | 
TrainerFetchSalesFail | TrainerFetchSalesRequest | TrainerFetchSalesSuccess | 
CreateNewCourseRequest | CreateNewCourseSuccess | CreateNewCourseFail |
UploadBackgroundImageFileFail | UploadBackgroundImageFileRequest | UploadBackgroundImageFileFail;