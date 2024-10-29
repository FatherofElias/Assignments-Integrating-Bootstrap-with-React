import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Home from './components/Home'
import Comics from './components/Comics';
import './components/CharacterList.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetail />} />
                <Route path="/comics" element={<Comics />} />
            </Routes>
        </Router>
    );
};

export default App;
