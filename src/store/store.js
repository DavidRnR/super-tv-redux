import { configureStore } from '@reduxjs/toolkit';
import tvShowsReducer from './tvShows/tvShowsSlice';

export const store = configureStore({
    reducer: {
        tvShows: tvShowsReducer
    },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
