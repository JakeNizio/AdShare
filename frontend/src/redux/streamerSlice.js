import {createSlice} from '@reduxjs/toolkit'

export const streamerSlice = createSlice({
    name: 'streamer',
    initialState: {
        streamers:[]
    },
    reducers: {
        loadStreamers: (state, action) => {
            state.streamers = action.payload
        },
        addStreamer: (state, action) => {
            state.streamers = [...state.streamers, action.payload]
        },
        removeStreamer: (state, action) => {
            state.streamers = state.streamers.filter((streamer) => (streamer._id !== action.payload._id))
        }
    }
})

export const {loadStreamers, addStreamer, removeStreamer} = streamerSlice.actions

export default streamerSlice.reducer