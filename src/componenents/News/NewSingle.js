import React from 'react';

const NewSingle = ({ item }) => {
    const { title, urlToImage, source, url } = item;

    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                        <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <p>{title}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer">Full article</a>
                </div>
            </div>
        </div>
    );
};

export default NewSingle;