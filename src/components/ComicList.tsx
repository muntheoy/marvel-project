import React from 'react';
import '../styles/CharacterList.css'
import ComicCard from './ComicCard';
import { Comic } from '../types/IComic';

export interface ComicListProps {
  comic: Comic[];
}

const ComicList: React.FC<ComicListProps> = ({ comic }) => {
  return (
    <div className="CharacterList">
      {comic.map((character, index) => (
        <ComicCard key={index} comic={character} />
      ))}
    </div>
  );
};

export default ComicList;
