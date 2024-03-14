import React from 'react';
import { useParams } from 'react-router-dom';
import characters from '../data/characters'; // Импортируем данные о персонажах

const CharacterPage = () => {
  let { characterId } = useParams(); // Получаем id персонажа из URL
  const character = characters.find(c => c.id === parseInt(characterId)); // Находим персонажа по id

  if (!character) {
    // Если персонаж не найден, показываем сообщение об ошибке
    return <div>Персонаж не найден.</div>;
  }

  // Отображаем информацию о персонаже
  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterPage;
