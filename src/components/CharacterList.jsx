import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import CharacterDetail from './CharacterDetail';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            const ts = 1; // Timestamp
            const publicKey = '41b840dae9a9fb35db11140418553aac';
            const privateKey = 'c36afbddff0194db0350efdd584e19ee7778b5b8';
            const hash = md5(ts + privateKey + publicKey).toString();
            const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

            try {
                const response = await axios.get(url);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    if (selectedCharacter) {
        return <CharacterDetail characterId={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />;
    }

    return (
        <div className="character-list">
            {characters.map((character) => (
                <div key={character.id} className="character-card" onClick={() => setSelectedCharacter(character.id)}>
                    <h3>{character.name}</h3>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
