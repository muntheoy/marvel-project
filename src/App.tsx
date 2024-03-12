import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Comics from './pages/Comics'; // Импортируем компонент страницы комиксов
import { characters } from './data/characters'; // Импортируем данные о персонажах

import './App.css';
import Characters from './pages/Characters';
import AppRouter from './components/AppRouter';


// Создаем объект comicsMap, где ключами являются идентификаторы персонажей, а значениями - массивы комиксов для каждого персонажа


function App() {
  return (
      <div className="App">
        <AppRouter/>
      </div>
    
  );
}

export default App;
