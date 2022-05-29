import apiService from '../../services/api.service';
import { setLoading, setTvShows, setShowSelected } from './tvShowsSlice';

export const getTvShows = (query) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiService.httpGet('/search/tv', { query });
        dispatch(setTvShows({ shows: response.results, query }));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const getTvShowById = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const show = await apiService.httpGet(`/tv/${id}`);
        dispatch(setShowSelected(show));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
};
