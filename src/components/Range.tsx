import { useBookStore } from "../store/useBookStore";

export default function Range() {
    const { getPageCount, setFilterBookParams, rangeValue, setRangeValue } = useBookStore();
    const { minPageCount, maxPageCount } = getPageCount()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value))
        setFilterBookParams("pageCount", rangeValue)
    }

    return (
        <div className="form-control w-full max-w-xs">
            <label
                htmlFor="range"
                className="label"
            >
                Filtrar por Paginas
            </label>
            <div className="flex gap-2">
                <label>{minPageCount}</label>
                <div className="tooltip tooltip-bottom" data-tip={rangeValue}>
                    <input
                        type="range"
                        min={minPageCount}
                        max={maxPageCount}
                        value={rangeValue}
                        className="range range-xs"
                        onChange={handleChange}
                    />
                </div>
                <label>{maxPageCount}</label>
            </div>
        </div>
    );
}
