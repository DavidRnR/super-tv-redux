import React from 'react';

const Review = (props) => {
    return (
        <div>
            <div>
                <h3>Written by {props.review.author}</h3>
                <p>{props.review.content}</p>
            </div>
        </div>
    );
};

export default Review;
