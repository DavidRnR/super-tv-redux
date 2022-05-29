import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    query: null,
    shows: [],
    showSelected: null,
};

export const tvShowsSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers: {
        setTvShows: (state, action) => {
            const { shows, query } = action.payload;
            state.shows = shows;
            state.query = query;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setShowSelected: (state, action) => {
            state.showSelected = action.payload;
        }
    },
});

export const { setTvShows, setLoading, setShowSelected } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
