import { Client } from "../clientInterfaces/Client";
import { Course } from "../courseInterfaces/Course";
import { Contacts, Sale } from "../Interfaces";

export type TRAINER = 'TRAINER';

export interface Trainer {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    schoolName: string, 
    password: string, 
    about: string,
    contacts: Contacts,
    courses: Course[],
    sales: Sale[],
    users: string[],
    imageURL: string
};
