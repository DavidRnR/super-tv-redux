import React, { useState, useEffect, useCallback, Fragment } from 'react';
import apiService from '../../../../services/api.service';
import Review from './Review/Review';
import classes from './Reviews.module.css';
import LinearProgress from '../../../../components/ui/LinearProgress/LinearProgress';

const Reviews = ({ tvShowId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        const response = await apiService.httpGet(`/tv/${tvShowId}/reviews`);
        const auxReviews = response.results.map((r, i) => {
            return <Review key={i} review={r} />;
        });
        setReviews(auxReviews);
        setLoading(false);
    };

    const stableFetchData = useCallback(fetchReviews, [tvShowId]);
    useEffect(() => {
        tvShowId && stableFetchData();
    }, [stableFetchData]);

    return (
        <Fragment>
            { loading
                ? (<LinearProgress />)
                : (
                    <section className={classes.reviewsContainer}>
                        <h1>User Reviews</h1>
                        {reviews?.length ? reviews : <span>No reviews to Show</span>}
                    </section>
                )}
        </Fragment>
    );
};

export default Reviews;
