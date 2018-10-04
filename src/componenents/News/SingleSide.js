import React from 'react';
import PropTypes from 'prop-types';

const SingleSide = ({ item }) => {
    return (
        <div>
            <div className="divider"></div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="sectoin">
                    <h5>{item.source.name}</h5>
                    <p>{item.title}</p>
                </div>
            </a>
        </div>
    );
};

SingleSide.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SingleSide;