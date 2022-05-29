import React from 'react';
import { useSelector } from 'react-redux';
import customClasses from './TvShowsPage.module.css';
import TvShow from './components/TvShow/TvShow';
import LinearProgress from 'src/components/ui/LinearProgress/LinearProgress';
import TvShowSearch from './components/TvShowSearch/TvShowSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const TvShowsPage = () => {
    const shows = useSelector(state => state.tvShows.shows);
    const loading = useSelector(state => state.tvShows.loading);

    return (
        <div>
            <TvShowSearch />
            {loading
                ? (<LinearProgress />)
                : (
                    <section className={customClasses.container}>
                        {shows?.length
                            ? shows.map((s, i) => {
                                return <TvShow tvShow={s} key={i} />;
                            })
                            : (<div className={customClasses.noTvShows}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                No TV-Shows to show
                            </div>)
                        }
                    </section>)}
        </div>
    );
};

export default TvShowsPage;
