import { Book, Books } from "../interfaces/Book";

export type Store = {
    books: Books;
    toReadBooks: Book[];
    filterParams: {
        genre?: string;
        pageCount?: number;
        name?: string;
    };
    modalBook: Book | null;
    rangeValue: number;
    setRangeValue: (value: number) => void;
    getPageCount: () => { minPageCount: number; maxPageCount: number }
    getBookGenres: () => string[];
    setFilterBookParams: (name: string, value: string | number) => void;
    filterBooks: () => void;
    resetFilterBooksParams: () => void;
    handleBookList: (book: Book, action: string) => void;
    sortReadListBooks: (newReadList: Book[]) => void;
    setModalBook: (book: Book | null) => void;
}