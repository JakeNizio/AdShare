import { useDispatch } from "react-redux"
import { changeSorting } from "../redux/filterSlice"

const SortDropdown = () => {
    
    const dispatch = useDispatch()

    const options = [
        {
            label: "-",
            value: "-"
        },   
        {
            label: "Most Viewers",
            value: "mostViewers"
        },
        {
            label: "Least Viewers",
            value: "leastViewers"
        },
    ]

    const handleChange = (e) => {
        switch (e.target.value) {
            case "mostViewers":
                return dispatch(changeSorting({
                    criterion:'viewers',
                    rank: 'most'
                }))

            case "leastViewers":
                return dispatch(changeSorting({
                    criterion: 'viewers',
                    rank: 'least'
                }))
            
            default:
                return
        }
    }

    return (
        <div className="sort-dropdown">
            <p>Sort</p>
            <select onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SortDropdown