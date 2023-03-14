import StreamersListEntry from "./StreamersListEntry"
import PageSelector from "./PageSelector"
import { useSelector } from "react-redux"

const StreamersList = () => {
    const { streamers } = useSelector(state => state.streamer)
    const { sorting, filters, page } = useSelector(state => state.filter)
    
    let filteredStreamers = [...streamers]

    filters.filter((filter) => {
        filteredStreamers = filteredStreamers.filter((streamer) => 
            streamer[filter.criterion] >= filter.min && streamer[filter.criterion] <= filter.max
        )
        return null
    })
    
    let sortedStreamers = [...filteredStreamers]
    
    if (sorting.criterion) {
        sortedStreamers = sortedStreamers.sort((a, b) => {
            if (a[sorting.criterion] < b[sorting.criterion]) {
                return 1
            }
            if (a[sorting.criterion] > b[sorting.criterion]) {
                return -1
            }
            return 0
        })
    }
    if (sorting.rank === 'least'){
        sortedStreamers.reverse()
    }

    // Load 10 streamers and hold page index
    const streamersPerPage = 10
    let pageStreamers = [...sortedStreamers].slice(page*streamersPerPage,page*streamersPerPage + streamersPerPage)


    return (
        <div>
            {pageStreamers && pageStreamers.map((streamer) => {
                return <StreamersListEntry key={streamer._id} streamer={streamer}/>
            })}
            <PageSelector numStreamers={filteredStreamers.length} page={page} streamersPerPage={streamersPerPage}/>
        </div>
    )
}

export default StreamersList