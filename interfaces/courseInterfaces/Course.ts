import { Lesson } from "../lessonInterfaces/Lesson";

export interface Course {
    _id: string,
    title: string,
    description: string,
    imageURL: string,
    contentVisibility: number,
    accessToContent: number,
    programStart: number,
    price: number,
    numberOfPurchases: number,
    totalUsers: number,
    lessons: Lesson[],
    trainer: string
};
