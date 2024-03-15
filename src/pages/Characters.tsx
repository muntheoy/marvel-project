import React, { useState } from 'react';
import { Character } from '../types/ICharacter';
import CharacterList from '../components/CharacterList';
import '../styles/Characters.css';

export interface CharactersPageProps {
  character: Character[];
}

const Characters: React.FC<CharactersPageProps> = ({ character: characters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

  const handleSearch = () => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (


      <div className="Characters">
        <div className='Characters-title'>
          <h2>Characters</h2>
          <h1>({filteredCharacters.length})</h1>
        </div>
        <div className='Characters-search-container'>
          <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className='Characters-line'></div>
        <CharacterList characters={filteredCharacters} />
      </div>


  );
};

export default Characters;