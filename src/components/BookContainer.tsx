import Card from './Card';
import { useBookStore } from '../store/useBookStore';
import { Book } from '../interfaces/Book';

export default function BooksContainer() {
    const { books, handleBookList, setModalBook } = useBookStore();

    if (!books.library.length) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 h-[40vh]">
                <h1 className="text-2xl font-bold">No se encontraron resultados</h1>
                <p className="text-sm">Intenta con otros filtros</p>
            </div>
        )
    }

    const handleModal = (book: Book) => {
        const modal = document.querySelector('#my_modal') as HTMLDialogElement;
        setModalBook(book);
        modal.showModal();
    }

    return (
        <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start">
            {
                books.library.map(({ book }) => {
                    return (
                        <div key={book.id} className="flex flex-col items-center gap-2 animate__animated animate__fadeIn">
                            <button onClick={() => handleModal(book)}>
                                <Card book={book} className="w-44 h-64" />
                            </button>
                            <button
                                className='btn btn-primary btn-sm'
                                onClick={() => handleBookList(book, 'add')}
                            >
                                📖 Agregar a lista
                            </button>
                        </div>
                    )
                })
            }
        </div >
    );
}
