import React, { useState } from 'react';

const Search = ({ setQuery }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for comics..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
