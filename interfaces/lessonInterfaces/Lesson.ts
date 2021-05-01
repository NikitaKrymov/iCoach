import { AudioBlock, ImageBlock, TextBlock, VideoBlock } from "./LessonBlock";

export interface Lesson {
    id: string,
    index: number,
    isDraft: boolean,
    title: string, 
    description: string,
    imageURL: string,
    blocks: any[]
};
