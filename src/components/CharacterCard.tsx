import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/ICharacter';
import '../styles/CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
  
      <Link to={`/character/${character.id}`} className="CharacterCard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img className="CharacterCard-img" src={character.image} alt={character.name} />
        <div className="CharacterCard-text">
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </div>
      </Link>
  );
};

export default CharacterCard;
