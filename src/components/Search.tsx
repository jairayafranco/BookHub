import { useBookStore } from "../store/useBookStore";

export default function Search() {
    const { setFilterBookParams, filterParams } = useBookStore();

    return (
        <div className="form-control w-full max-w-xs">
            <label
                htmlFor="range"
                className="label"
            >
                Filtrar por Nombre
            </label>
            <input
                value={filterParams.name}
                type="text"
                placeholder="Frankenstein..."
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFilterBookParams("name", e.target.value)}
            />
        </div>
    );
}
