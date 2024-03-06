import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем Routes и Route
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Character } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg';
import Characters from './pages/Characters';

function App() {
  const characters: Character[] = [
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist. дувррдзцщзгшраодыфв.',
      image: ironManImage,
    },
    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },

    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 1,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    
    
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Оборачиваем маршруты в компонент Routes */}
          <Route path="/characters" element={<Characters characters={characters} />} /> {/* Используем element вместо component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
