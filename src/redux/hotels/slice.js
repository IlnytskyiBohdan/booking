import { createSlice } from "@reduxjs/toolkit";

const hotels = createSlice({
    name: 'hotels',
    initialState: {
        items: [],
        loading: false,
        error: null,
        searchParams: null,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSearchParams: (state, action) => {
            state.searchParams = action.payload;
        },
    }
})

export default hotels;
