import React from 'react';
import { Character, Comic } from '../types/ICharacter';
import ComicCard from '../components/ComicCard';


interface ComicsProps {
  characters: Character[];
  comicsMap: Record<string, Comic[]>;
}

const Comics: React.FC<ComicsProps> = ({ characters, comicsMap }) => {
  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>
          <ComicCard character={character} comics={comicsMap[character.id]} />
        </div>
      ))}
    </div>
  );
};

export default Comics;
