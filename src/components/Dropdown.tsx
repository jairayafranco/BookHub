import { useBookStore } from "../store/useBookStore";

export default function Dropdown() {
    const { getBookGenres, setFilterBookParams, filterParams } = useBookStore();
    const genresList = getBookGenres();

    return (
        <div className="form-control w-full max-w-xs">
            <label
                htmlFor="range"
                className="label"
            >
                Filtrar por Genero
            </label>
            <select
                className="select select-bordered"
                onChange={(e) => setFilterBookParams("genre", e.target.value)}
                value={filterParams.genre}
            >
                <option>Todas</option>
                {
                    genresList.map((genre, index) => (
                        <option key={index}>
                            {genre}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}
