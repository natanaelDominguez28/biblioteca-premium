import { Book } from "./book";

export class Author {
    author_id!: string;
    name!: string;
    image!: string;
    info!: string;
    author_books!: Array<Book>;
}


