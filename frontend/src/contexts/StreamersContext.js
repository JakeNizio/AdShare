import { createContext, useReducer } from 'react'

export const StreamersContext = createContext()

export const streamersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STREAMERS':
            return {
                streamers: action.payload
            }
        case 'SET_STREAMER':
            return {
                streamers: [action.payload, ...state.streamers]
            }
        case 'DELETE_STREAMER':
            return {
                streamers: state.streamers.filter((streamer) => streamer._id !== action.payload._id)
            }
        case 'SET_FILTER': // going to create a filters array that is used to multiquery from the db each update > filter objects should have criterion, min and max
                            // or should I have a filter context that is referenced in a function preceding listing > never actually changing the list
            return {
                filters: action.payload
            }
        case 'DELETE_FILTER':
            return {
                filters: state.filters.filter((filter) => filter.criterion !== action.payload.criterion)
            }
        default:
            return state
    }

}

export const StreamersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(streamersReducer, {
        streamers: [],
        filters: []
    })

    return (
        <StreamersContext.Provider value={{...state, dispatch}}>
            {children}
        </StreamersContext.Provider>
    )
}