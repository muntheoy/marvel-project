import React from 'react';
import CharacterCard from './CharacterCard'; 
import { Character } from '../types/ICharacter';
import '../styles/CharacterList.css'
import { Router } from 'react-router';

export interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
      <div className="CharacterList">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
  );
};

export default CharacterList;
