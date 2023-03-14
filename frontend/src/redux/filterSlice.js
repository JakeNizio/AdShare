import {createSlice} from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        page: 0,
        filters:[],
        sorting: {
            criterion: '',
            rank: ''
        }
    },
    reducers: {
        addFilter: (state, action) => {
            state.filters = [...state.filters, action.payload]
        },
        removeFilter: (state, action) => {
            state.filters = state.filters.filter((filter) => (filter.criterion !== action.payload.criterion))
        },
        changeSorting: (state, action) => {
            state.sorting = action.payload
        },
        changePage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const {addFilter, removeFilter, changeSorting, changePage} = filterSlice.actions

export default filterSlice.reducer