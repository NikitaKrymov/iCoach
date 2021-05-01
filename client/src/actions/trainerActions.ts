import { Client } from "../../../interfaces/clientInterfaces/Client";
import { Course } from "../../../interfaces/courseInterfaces/Course";
import { NewCourse } from "../../../interfaces/courseInterfaces/NewCourse";
import { Sale } from "../../../interfaces/Interfaces";
import { Trainer } from "../../../interfaces/trainerInterfaces/Trainer";
import { CreateNewCourseFail, CreateNewCourseRequest, CreateNewCourseSuccess, CREATE_NEW_COURSE_FAIL, CREATE_NEW_COURSE_REQUEST, CREATE_NEW_COURSE_SUCCESS, FETCH_TRAINER_CLIENTS_FAIL, FETCH_TRAINER_CLIENTS_REQUEST, FETCH_TRAINER_CLIENTS_SUCCESS, FETCH_TRAINER_COURSES_FAIL, FETCH_TRAINER_COURSES_REQUEST, FETCH_TRAINER_COURSES_SUCCESS, FETCH_TRAINER_SALES_FAIL, FETCH_TRAINER_SALES_REQUEST, FETCH_TRAINER_SALES_SUCCESS, TrainerFetchClientsFail, TrainerFetchClientsRequest, TrainerFetchClientsSuccess, TrainerFetchCoursesFail, TrainerFetchCoursesRequest, TrainerFetchCoursesSuccess, TrainerFetchSalesFail, TrainerFetchSalesRequest, TrainerFetchSalesSuccess, TRAINER_FETCH_DATA_FAIL, TRAINER_FETCH_DATA_REQUEST, TRAINER_FETCH_DATA_SUCCESS, UploadBackgroundImageFileFail, UploadBackgroundImageFileRequest, UploadBackgroundImageFileSuccess, UPLOAD_BACKGROUND_IMAGE_FILE_FAIL, UPLOAD_BACKGROUND_IMAGE_FILE_REQUEST, UPLOAD_BACKGROUND_IMAGE_FILE_SUCCESS } from "../types/trainerActionTypes";

export const fetchTrainerDataRequest = () => ({
    type: TRAINER_FETCH_DATA_REQUEST
});

export const fetchTrainerDataSuccess = (userData: Trainer) => ({
    type: TRAINER_FETCH_DATA_SUCCESS,
    payload: userData
});

export const fetchTrainerDataFail = () => ({
    type: TRAINER_FETCH_DATA_FAIL,
});

export const fetchTrainerClientsRequest = (trainerId: string): TrainerFetchClientsRequest => ({
    type: FETCH_TRAINER_CLIENTS_REQUEST,
    payload: trainerId
});

export const fetchTrainerClientsSuccess = (clients: Client[]): TrainerFetchClientsSuccess => ({
    type: FETCH_TRAINER_CLIENTS_SUCCESS,
    payload: clients
});

export const fetchTrainerClientsFail = (): TrainerFetchClientsFail => ({
    type: FETCH_TRAINER_CLIENTS_FAIL
});

export const fetchTrainerCoursesRequest = (trainerId: string): TrainerFetchCoursesRequest => ({
    type: FETCH_TRAINER_COURSES_REQUEST,
    payload: trainerId
});

export const fetchTrainerCoursesSuccess = (courses: Course[]): TrainerFetchCoursesSuccess => ({
    type: FETCH_TRAINER_COURSES_SUCCESS,
    payload: courses
});

export const fetchTrainerCoursesFail = (): TrainerFetchCoursesFail => ({
    type: FETCH_TRAINER_COURSES_FAIL
});

export const fetchTrainerSalesRequest = (trainerId: string): TrainerFetchSalesRequest => ({
    type: FETCH_TRAINER_SALES_REQUEST,
    payload: trainerId
});

export const fetchTrainerSalesSuccess = (sales: Sale[]): TrainerFetchSalesSuccess => ({
    type: FETCH_TRAINER_SALES_SUCCESS,
    payload: sales
});

export const fetchTrainerSalesFail = (): TrainerFetchSalesFail => ({
    type: FETCH_TRAINER_SALES_FAIL
});

export const createNewCourseRequest = (newCourse: NewCourse, image: any): CreateNewCourseRequest => ({
    type: CREATE_NEW_COURSE_REQUEST,
    payload: {
        newCourse: newCourse,
        image: image
    }
});

export const createNewCourseSucces = (course: Course): CreateNewCourseSuccess => ({
    type: CREATE_NEW_COURSE_SUCCESS,
    payload: course
});

export const createNewCourseFail = (): CreateNewCourseFail => ({
    type: CREATE_NEW_COURSE_FAIL
});

export const uploadBackgroundImageFileRequest = (image: any): UploadBackgroundImageFileRequest => ({
    type: UPLOAD_BACKGROUND_IMAGE_FILE_REQUEST,
    payload: image
});

export const uploadBackgroundImageFileSuccess = (url: string): UploadBackgroundImageFileSuccess => ({
    type: UPLOAD_BACKGROUND_IMAGE_FILE_SUCCESS,
    payload: url
});

export const uploadBackgroundImageFileFail = (): UploadBackgroundImageFileFail => ({
    type: UPLOAD_BACKGROUND_IMAGE_FILE_FAIL
}) 

