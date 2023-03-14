import { useDispatch } from 'react-redux'
import { addFilter, removeFilter } from "../redux/filterSlice"

const RangeFilters = ({options, criterion}) => {
    const dispatch = useDispatch()

    const handleChange = async (e) => {
        const {min, max} = options.find(option => option.description === e.target.value)
        dispatch(removeFilter({criterion}))
        dispatch(addFilter({criterion, min, max}))
    }

    return (
        <div>
            {options.map((option) => (
                <div key={option.description} className="range-filter">
                    <input type="radio" name={criterion} value={option.description} onClick={handleChange}/>
                    <label>{option.description}</label>
                </div>
            ))}
        </div>
    )
}

export default RangeFilters