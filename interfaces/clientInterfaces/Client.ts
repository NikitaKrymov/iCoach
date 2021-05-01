import { Course } from "../courseInterfaces/Course";
import { Contacts, Sale } from "../Interfaces";

export type CLIENT = 'CLIENT';

export interface Client {
    id: string, 
    username: string,
    firstName: string,
    lastName: string,
    contacts: Contacts,
    activeCourses: Course[],
    trainer: string,
    purchases: Sale[],
    imageURL: string
}