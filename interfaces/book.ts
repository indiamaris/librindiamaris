export interface Book {
    title: string;
    authors: Array<string>;
    resume: string;
    publisher: string;
    stars: number;
    isbn: number;
}
export interface BookWithId extends Book {
    id: number;
}
