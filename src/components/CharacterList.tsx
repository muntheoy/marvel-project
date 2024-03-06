import React from 'react';
import CharacterCard from './CharacterCard'; // Предполагается, что CharacterCard находится в том же каталоге
import { Character } from '../types/ICharacter';
import '../styles/CharacterList.css'

export interface CharacterListProps {
  characters: Character[]; // Предполагается, что у вас есть массив персонажей
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
