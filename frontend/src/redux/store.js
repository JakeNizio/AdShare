import {configureStore} from '@reduxjs/toolkit'

import streamerReducer from './streamerSlice'
import filterReducer from './filterSlice'
import uploadReducer from './uploadSlice'

export default configureStore ({
    reducer:{
        streamer: streamerReducer, // loadStreamers, addStreamer, removeStreamer
        filter: filterReducer, // addFilter, removeFilter
        upload: uploadReducer
    }
})