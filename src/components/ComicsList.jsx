import React from 'react';

const ComicsList = ({ comics }) => {
    return (
        <div>
            {comics.map((comic) => (
                <div key={comic.id}>
                    <h2>{comic.title}</h2>
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                    <p>{comic.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ComicsList;
