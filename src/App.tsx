import './App.css';
import AppRouter from './components/AppRouter';
import {  ironManDetails } from './data/characters'; // Импортируем только один персонаж и его детали
import { DetailsCharacter } from './pages/CharacterDeailsPage';
import { Character } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg'; // Импортируем изображение

const ironMan: Character = {
  id: 0,
  name: 'Iron Man',
  description: 'Genius, billionaire, playboy, philanthropist.',
  image: ironManImage, // Путь к изображению персонажа
};

function App() {
  return (
    <div className="App">
      <DetailsCharacter character={ironMan} details={ironManDetails} />
    </div>
  );
}

export default App;
