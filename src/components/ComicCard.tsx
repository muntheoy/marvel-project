import React from 'react';
import '../styles/CharacterCard.css';
import { Comic } from '../types/IComic';

interface ComicCardProps {
  comic: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <div className="DetaislCard">
      <img className="DetaislCard-img" src={comic.image} alt={comic.name} />
      <div className="CharacterCard-text">
        <h3>{comic.name}</h3>
        <p>{comic.description}</p>
      </div>
    </div>
  );
};

export default ComicCard;