import React from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import './components/CharacterList.css';

const App = () => {
    return (
        <div>
            <Header />
            <CharacterList />
        </div>
    );
};

export default App;
