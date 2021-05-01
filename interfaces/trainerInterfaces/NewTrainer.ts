import { Contacts } from "../Interfaces";

export interface NewTrainer {
    firstName: string,
    lastName: string,
    schoolName: string, 
    password: string, 
    about: string,
    phone: number,
    email: string,
    contacts: Contacts
};