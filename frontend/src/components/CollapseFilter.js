import { useState } from 'react'
// import { removeFilter } from '../redux/filterSlice'
// import { useDispatch } from 'react-redux'

const CollapseFilter = ({title, component, criterion}) => {
    const [open, setOpen] = useState(true)

    // const dispatch = useDispatch()

    // const reset = () => {
    //     dispatch(removeFilter({criterion}))
    // }

    return (
        <div>
            <div className="collapse-header">
                <h2>{title}</h2>
                <div>
                    {/* <button onClick={reset}> reset </button> */}
                    <button onClick={() => setOpen(!open)}>A</button>
                </div>
            </div>
            {open && component}
        </div>
    )
}

export default CollapseFilter