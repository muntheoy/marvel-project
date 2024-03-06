import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Character, Comic } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg';
import Characters from './pages/Characters';
import ComicCard from './components/ComicCard';

function App() {
  const character: Character = {
    id: 0,
    name: 'Iron Man',
    description: 'Genius, billionaire, playboy, philanthropist. дувррдзцщзгшраодыфв.',
    image: ironManImage,
  };

  // Создаем массив объектов Comic с уникальными ссылками
  const comics: Comic[] = [
    { title: 'Comic 1', link: 'https://www.example.com/comic1' },
    { title: 'Comic 2', link: 'https://www.example.com/comic2' },
    { title: 'Comic 3', link: 'https://www.example.com/comic3' },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Передача данных в ComicCard */}
        <ComicCard character={character} comics={comics} />
        <Routes>
          {/* Добавьте роуты здесь, если необходимо */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
