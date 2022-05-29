import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customClasses from './TvShowSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getTvShows } from '../../../../store/tvShows/tvShowsAPI';

const TvShowSearch = () => {
    const query = useSelector(state => state.tvShows.query);
    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();
        const query = event.target.tvShow.value;
        if (query) {
            dispatch(getTvShows(query));
        }
    };

    return (
        <section className={customClasses.formContainer}>
            <form className={customClasses.searchForm} onSubmit={onSubmit}>
                <input
                    name="tvShow"
                    placeholder="Search Tv Shows"
                    aria-label="Search tv shows"
                    defaultValue={query}
                />
                <button type="submit" aria-label="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </section>
    );
};

export default TvShowSearch;
