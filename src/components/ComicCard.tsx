import React from 'react';
import { Character, Comic } from '../types/ICharacter';
import '../styles/ComicCard.css';

export interface CharacterCardProps {
  character: Character;
  comics: Comic[]; // Обновляем тип данных для списка комиксов
}

const ComicCard: React.FC<CharacterCardProps> = ({ character, comics }) => {
  return (
    <div className="ComicCard">
      <img className="ComisCard-img" src={character.image} alt={character.name} />
      <div className="ComicCard-text">
        <div className='ComicCard-text-description'>
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </div>
        <div className='ComicCard-text-list'>
          <h3>Comics</h3>
          {comics.map((comic, index) => (
            <div key={index}>
              <a href={comic.link} target="_blank" rel="noopener noreferrer">{comic.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
