import { createSlice } from "@reduxjs/toolkit";

const destination = createSlice({
    name: 'destination',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export default destination;