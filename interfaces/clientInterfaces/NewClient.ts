import { Course } from "../courseInterfaces/Course";
import { Contacts, Sale } from "../Interfaces";

export interface NewClient {
    username: string,
    firstName: string,
    password: string,
    lastName: string,
    contacts: Contacts,
    activeCourses: Course[],
    trainer: string,
    purchases: Sale[],
    imageURL: string
}