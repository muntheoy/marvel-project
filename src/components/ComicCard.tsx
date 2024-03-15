import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.css';
import { Comic } from '../types/IComic';

interface ComicCardProps {
  comic: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <Link to={`/comics/${comic.id}`} className="CharacterCard" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img className="CharacterCard-img" src={comic.image} alt={comic.name} />
      <div className="CharacterCard-text">
        <h3>{comic.name}</h3>
        <p>{comic.description}</p>
      </div>
    </Link>
  );
};

export default ComicCard;