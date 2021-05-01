import { put, delay, call } from "redux-saga/effects";
import { Client } from "../../../interfaces/clientInterfaces/Client";
import { Course } from "../../../interfaces/courseInterfaces/Course";
import { Sale } from "../../../interfaces/Interfaces";
import { authenticateTrainerSuccess } from "../actions/authActions";
import { fetchTrainerClientsSuccess, fetchTrainerCoursesFail, fetchTrainerCoursesSuccess, fetchTrainerSalesSuccess } from "../actions/trainerActions";
import { AuthTrainerRequest } from "../types/authActionInterfaces";
import { CreateNewCourseRequest, TrainerFetchClientsRequest, TrainerFetchCoursesRequest, TrainerFetchSalesRequest } from "../types/trainerActionTypes";
import iCoachAPI from "../utils/iCoachAPI";

export function* authTrainer(action: AuthTrainerRequest) {
    yield console.log('FEtching trainer account');
    const response = yield call(() => iCoachAPI.post('/authTrainer', action.payload));
    console.log(response);
    if (!response.data.message) {
        yield put(authenticateTrainerSuccess(response.data))
    } else {
        console.log("fail to authenticate")
    }
}

export function* fetchTrainerClients(action: TrainerFetchClientsRequest) {
    yield console.log('fetching trainer users by trainer ID', action.payload);
    let clients: Client[] = [];

    clients = yield delay(1000, [
        {
            id: 'Client ID 1',
            firstName: 'Client First Name',
            lastName: 'Client Last Name',
            contacts: {
                phone: 87498194,
                email: 'client@gmail.com',
                address: {
                    country: "US",
                    state: "TX",
                    city: 'Austin',
                    street: "Wells Branch",
                    zipCode: 87828
                }
            },
            activeCourses: [
                {
                    id: "Client's course ID",
                    title: "Client's course title",
                    description: "Client's course description",
                    imageURL: "ImageURL",
                    contentVisibility: 1,
                    accessToContent: 1,
                    programStart: 1,
                    price: 50,
                    numberOfPurchases: 1,
                    totalUsers: 10,
                    lessons: [
                        {
                            id: "Client's course lesson ID",
                            title: "Client's course lesson title",
                            description: "Client's course lesson description",
                            index: 1,
                            isDraft: false,
                            imageURL: "ImageURL",
                            blocks: [
                                {
                                    id: "Client's course lesson block ID",
                                }
                            ]
                        }
                    ]
                }
            ],
            trainer: 'Trainer ID',
            purchases: [
                {
                    id: "CLient's purchase ID",
                    title: "Client's purchase title",
                    courseId: "Client's pucrhase course ID",
                    date: new Date(),
                    price: 50,
                    clientId: "Client's ID",
                    trainerId: "Trainer's ID"
                }
            ],
            imageURL: "ImageURL"
        }
    ] );

    yield put(fetchTrainerClientsSuccess(clients));
}

export function* fetchTrainerCourses(action: TrainerFetchCoursesRequest){
    yield console.log('fetching all trainer courses by Trainer ID', action.payload);
    const response = yield call(() => iCoachAPI.get(`/fetchCourses?userID=${action.payload}`));
    console.log(response);
    if (response.data.code === 200){
        yield put(fetchTrainerCoursesSuccess(response.data.courses));
    } else {
        yield put(fetchTrainerCoursesFail());
    }
}

export function* fetchTrainerSales(action: TrainerFetchSalesRequest){
    yield console.log('fetching all trainer sales by trainer ID', action.payload);
    let sales: Sale[] = [];
    sales = yield delay(1000, [
        {
            id: "Trainer's sale ID 1",
            title: "Trainer's sale title 1",
            courseId: "course1",
            date: new Date(2021, 2, 29),
            price: 50,
            clientId: "Client's ID",
            trainerId: "Trainer's ID"
        },
        {
            id: "Trainer's sale ID 2",
            title: "Trainer's sale title 2",
            courseId: "course2",
            date: new Date(2021, 2, 25),
            price: 60,
            clientId: "Client's ID",
            trainerId: "Trainer's ID"
        },
        {
            id: "Trainer's sale ID 3",
            title: "Trainer's sale title 3",
            courseId: "course1",
            date: new Date(2021, 2, 20),
            price: 30,
            clientId: "Client's ID",
            trainerId: "Trainer's ID"
        }
    ])

    yield put(fetchTrainerSalesSuccess(sales));

}

export function* createNewCourse(action: CreateNewCourseRequest) {
    yield console.log('Sending new course to the server', action.payload);
    const imageUploadResponse = yield call(() => iCoachAPI.post('/uploadBackgroundImageFile', action.payload.image ));
    console.log(imageUploadResponse.data);
    if (imageUploadResponse.data.code === 200) {
        const response = yield call(() => iCoachAPI.post('createNewCourse', { newCourse: action.payload.newCourse, backgroundImageUrl: imageUploadResponse.data.imageURL }));
        console.log(response);
    }
}