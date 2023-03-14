import {createSlice} from '@reduxjs/toolkit'

export const uploadSlice = createSlice({
    name: 'upload',
    initialState: {
        upload: '',
        streamersSelected: []
    },
    reducers: {
        changeUpload: (state, action) => {
            state.upload = action.payload
        },
        addStreamersSelected: (state, action) => {
            state.streamersSelected = [action.payload, ...state.streamersSelected]
            console.log(state.streamersSelected)
        },
        removeStreamersSelected: (state, action) => {
            state.streamersSelected = state.streamersSelected.filter(streamer => (action.payload._id !== streamer._id))
            console.log(state.streamersSelected)
        }
    }
})

export const {changeUpload, addStreamersSelected, removeStreamersSelected} = uploadSlice.actions

export default uploadSlice.reducer