import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterDetail = () => {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            const ts = 1; // Timestamp
            const publicKey = '41b840dae9a9fb35db11140418553aac';
            const privateKey = 'c36afbddff0194db0350efdd584e19ee7778b5b8';
            const hash = md5(ts + privateKey + publicKey).toString();
            const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

            try {
                const response = await axios.get(url);
                setCharacter(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        if (id) {
            fetchCharacterDetails();
        }
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className="character-detail">
            <button onClick={() => navigate('/character')}>Back to List</button>
            <h2>{character.name}</h2>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.description || "No description available."}</p>
            <h3>Comics</h3>
            <ul>
                {character.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
