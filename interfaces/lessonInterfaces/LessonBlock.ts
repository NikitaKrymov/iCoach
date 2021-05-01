export type TEXT = 'TEXT';
export type VIDEO = 'VIDEO';
export type AUDIO = 'AUDIO';
export type IMAGE = 'IMAGE';

export interface TextBlock {
    id: string,
    index: number,
    type: TEXT,
    font: string,
    size: string,
    position: string,
    color: string,
    content: string,
}

export interface AudioBlock {
    id: string,
    type: AUDIO,
    index: number,
    url: string,
}

export interface VideoBlock {
    id: string, 
    type: VIDEO,
    index: number,
    url: string,

}

export interface ImageBlock {
    id: string, 
    index: number,
    type: IMAGE,
    url: string,
    position: string, 
    size: string
}