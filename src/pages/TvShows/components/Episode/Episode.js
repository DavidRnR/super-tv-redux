import React from 'react';
import apiService from '../../../../services/api.service';
import noImage from '../../../../assets/images/no-image.jpg';
import classes from './Episode.module.css';

const Episode = props => {
    return (
        <div className={classes.container}>
            <h4>{`"${props.episode.name}" - Season ${props.episode.season_number}`}</h4>
            <label>Release: {props.episode.air_date}</label>
            <p>{props.episode.overview}</p>

            <img src={props.episode.still_path
                ? `${apiService.config.apiImages}${props.episode.still_path}`
                : noImage}
            alt={props.episode.name} />
        </div>
    );
};

export default Episode;
