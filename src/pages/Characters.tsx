import React from 'react';
import '../styles/ComicCard.css';
import { Character, Comic } from '../types/ICharacter';

export interface ComicCardProps {
  character: Character;
  comics: Comic[];
}

const ComicCard: React.FC<ComicCardProps> = ({ character, comics }) => {
  return (
    <div className="CharacterCard">
      <img className="ComisCard-img" src={character.image} alt={character.name} />
      <div className="ComicCard-text">
        <div className='ComicCard-text-description'>
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </div>
        <div className='ComicCard-text-list'>
          <h3>Comics</h3>
          {comics.map((comic, index) => (
            <a key={index} href={comic.link} target="_blank" rel="noopener noreferrer">{comic.title}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
