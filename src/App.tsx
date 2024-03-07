import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Comics from './pages/Comics'; // Импортируем компонент страницы комиксов
import { characters } from './data/characters'; // Импортируем данные о персонажах
import { ironManComics, captainAmericaComics, thorComics } from './data/comics'; // Импортируем данные о комиксах
import './App.css';

// Создаем объект comicsMap, где ключами являются идентификаторы персонажей, а значениями - массивы комиксов для каждого персонажа
const comicsMap = {
  0: ironManComics,
  1: captainAmericaComics,
  2: thorComics,
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Роут для страницы комиксов */}
          <Route path="/comics" element={<Comics characters={characters} comicsMap={comicsMap} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
