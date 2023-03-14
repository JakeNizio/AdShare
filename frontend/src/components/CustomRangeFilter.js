import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addFilter, removeFilter } from "../redux/filterSlice"

const CustomRangeFilter = ({type, dataset, criterion}) => {
    const {filters} = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        filters.map((filter) => {
            if(filter.criterion === criterion){
                return dispatch(removeFilter(filter))
            }
            return null
        })
        dispatch(addFilter({criterion, min, max}))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="custom-filter-grid">
                    <div>
                        <label>Min</label>
                        <input value={min} onChange={(e) => setMin(e.target.value)} type={type} />
                    </div>
                    <p>-</p>
                    <div>
                        <label>Max</label>
                        <input value={max} onChange={(e) => setMax(e.target.value)} type={type} />
                    </div>
                </div>
                <button>Apply Changes</button>
            </form>
        </div>
    )
}

export default CustomRangeFilter