import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeFilter } from "../redux/filterSlice"

const FilterList = () => {
    const { filters } = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleClick = (criterion) => {
        dispatch(removeFilter({criterion:criterion}))
    }

    return (
        <div>
            <h1>Filters</h1>
            {filters.map((filter) => (
                <div key={filter.criterion}>
                {filter.criterion}: {filter.min}-{filter.max} <button onClick={() => handleClick(filter.criterion)}>x</button>
                </ div>
            ))}
        </div>
    )
}

export default FilterList