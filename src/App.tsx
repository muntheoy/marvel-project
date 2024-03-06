// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterCard from './components/CharacterCard';
import { Character } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg';


function App() {
  const character: Character = {
    id: 0,
    name: 'Character Name',
    description: 'Character Description',
    image: ironManImage,
  };  

  return (
    <Router>
      <div className="App">
        <Header />
        <CharacterCard character={character} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
