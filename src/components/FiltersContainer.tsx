import Range from "./Range";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { useBookStore } from "../store/useBookStore";

export default function FiltersContainer() {
    const { filterBooks, resetFilterBooksParams } = useBookStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        filterBooks()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="sm:flex flex-row gap-10">
                <Search />
                <Dropdown />
                <Range />
            </div>
            <div className="flex gap-1 mt-2">
                <button className="btn btn-sm btn-accent" type="submit">Buscar</button>
                <button className="btn btn-sm btn-secondary" onClick={resetFilterBooksParams}>Limpiar</button>
            </div>
        </form>
    );
}
