import { useDispatch } from "react-redux"
import { changePage } from "../redux/filterSlice"

const PageSelector = ({numStreamers, page, streamersPerPage}) =>{ 
    const dispatch = useDispatch()
    
    const nextPage = () => {
        dispatch(changePage(page+1))
        const topSection = document.getElementById('current-page')
        topSection.scrollIntoView({behavior: 'smooth'})
    }
    const prevPage = () => {
        dispatch(changePage(page-1))
        const topSection = document.getElementById('current-page')
        topSection.scrollIntoView({behavior: 'smooth'})
    }

    const maxPage = Math.ceil(numStreamers/streamersPerPage)
    
    return (
        <div>
            {page > 0 && <button onClick={prevPage}>Prev</button>}
            {page < maxPage-1 && <button onClick={nextPage}>Next</button>}
            Page {page+1}/{maxPage}
        </div>
    )
}

export default PageSelector