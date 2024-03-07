import React from 'react';
import { Character } from '../types/ICharacter';
import '../styles/CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="CharacterCard">
      <img className="CharacterCard-img" src={character.image} alt={character.name} />
      <div className="CharacterCard-text">
        <h3>{character.name}</h3>
        <p>{character.description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;