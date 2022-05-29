import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './Rate.module.css';

const Rate = ({ rateValue }) => {
    return (
        <div className={classes.detailRating}>
            <FontAwesomeIcon icon={faStar} className={classes.starRate} />
            <h2>{rateValue}</h2><h4>/10</h4>
        </div>
    );
};

export default Rate;
