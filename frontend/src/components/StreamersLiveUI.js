import FiltersSidebar from "./FiltersSidebar"
import SortDropdown from "./SortDropdown"
import StreamersList from "./StreamersList"
import PreviewAdButton from "./PreviewAdButton"
import PurchaseAdsButton from "./PurchaseAdsButton"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { loadStreamers } from "../redux/streamerSlice"

const StreamersLiveUI = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getStreamers = async () => {
            const response = await fetch('/api/streamers/')
            const json = await response.json()
            
            if (response.ok) {
                dispatch(loadStreamers(json))
            }
        }
        getStreamers()
    }, [dispatch])

    return (
        <div className="streamers-live">
            <div className="info-grid">
                <FiltersSidebar />
                <div>
                    <div className="heading-grid">
                        <h1>Streamers Live</h1>
                        <SortDropdown />
                    </div>
                    <StreamersList />
                </div>
            </div>
            <div className="buttons">
                <PreviewAdButton />
                <PurchaseAdsButton />
            </div>
        </div>
    )
}

export default StreamersLiveUI