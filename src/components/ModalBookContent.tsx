import { useBookStore } from "../store/useBookStore";

export default function ModalBookContent() {
    const { modalBook: book } = useBookStore();

    return (
        <dialog id="my_modal" className="modal">
            <form method="dialog" className="modal-box">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <img className="w-44 h-64" src={book?.cover} />
                    <div>
                        <h1 className="text-2xl font-bold">{book?.title}</h1>
                        <div className="my-2">
                            <p className="text-sm font-bold">Autor: {book?.author.name}</p>
                            <p className="text-sm font-bold">Otros libros: {book?.author.otherBooks.join(', ')}</p>
                        </div>
                        <p className="text-sm font-bold">Genero: {book?.genre}</p>
                        <p className="text-sm font-bold">Año: {book?.year}</p>
                        <p className="text-sm font-bold">ISBN: {book?.ISBN}</p>
                        <p className="text-sm font-bold">Descripción: {book?.synopsis}</p>
                        <p className="text-sm font-bold">Paginas: {book?.pages}</p>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

    );
}
