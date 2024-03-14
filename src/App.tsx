import './App.css';
import AppRouter from './components/AppRouter';
import {  ironManDetails } from './data/characters'; // Импортируем только один персонаж и его детали
import { Character } from './types/ICharacter';
import ironManImage from './assets/iron-man.jpeg'; // Импортируем изображение
import { DetailsCharacter } from './pages/CharacterDetails';



function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
