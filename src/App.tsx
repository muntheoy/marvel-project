import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList'; // Импортируем компонент CharacterList
import { Character } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg';

function App() {
  // Создаем массив персонажей
  const characters: Character[] = [
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist. дувррдзцщзгшраодыфв.',
      image: ironManImage,
    },
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist.',
      image: ironManImage,
    },
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist. дувррдзцщзгшраодыфв.',
      image: ironManImage,
    },
    {
      id: 0,
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist. дувррдзцщзгшраодыфв.',
      image: ironManImage,
    },
    // Добавьте здесь других персонажей, если нужно
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Выводим компонент CharacterList и передаем ему массив персонажей */}
        <CharacterList characters={characters} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
