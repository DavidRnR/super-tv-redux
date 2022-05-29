import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '../../components/ui/LinearProgress/LinearProgress';
import TvShowDetails from './components/TvShowDetails/TvShowDetails';
import Reviews from './components/Reviews/Reviews';
import { getTvShowById } from 'src/store/tvShows/tvShowsAPI';

const TvShowDetailsPage = () => {
    const { tvshowId } = useParams();

    const show = useSelector(state => state.tvShows.showSelected);
    const loading = useSelector(state => state.tvShows.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTvShowById(tvshowId));
    }, [tvshowId]);

    if (loading || !show?.id) {
        return <LinearProgress />;
    }

    return (
        <Fragment>
            <TvShowDetails tvShowDetail={show} />
            <Reviews tvShowId={show.id}/>
        </Fragment>
    );
};

export default TvShowDetailsPage;
