import React, { useState } from 'react';
import { Comic } from '../types/IComic';
import ComicList from '../components/ComicList';
import '../styles/Characters.css';

export interface ComicsPageProps {
  comic: Comic[];
}

export const Comics: React.FC<ComicsPageProps> = ({ comic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredComics, setFilteredComics] = useState<Comic[]>(comic);

  const handleSearch = () => {
    const filtered = comic.filter(comic =>
      comic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComics(filtered);
  };

  return (
    <div className="Characters">
      <div className='Characters-title'>
        <h2>Comics</h2>
        <h1>({filteredComics.length})</h1>
      </div>
      <div className='Characters-search-container'>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='Characters-line'></div>
      <ComicList comic={filteredComics} />

    </div>
  );
};

export default Comics;