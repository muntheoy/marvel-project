import React from 'react';
import '../styles/DetailsPage.css';
import { useParams } from 'react-router-dom';
import { captainAmericaDetails } from '../data/characters';
import { Character, CharacterDetails } from "../types/ICharacter";

interface CharacterDetailsProps {
    
    details: CharacterDetails[];
}

export const Prikol: React.FC<CharacterDetailsProps> = ({ details }) => {
    let { characterId } = useParams();
    const id = parseInt(characterId || '0'); // Обработка потенциального undefined
    const characterstar = characters.find(c => c.id === id);

    if (!characterstar) {
        return <div>Персонаж не найден</div>; // Условный рендеринг в случае, если персонаж не найден
    }

    return (
        <div className="DetailsCard">
            <div>hui</div>
            <img className="DetailsCard-img" src={characterstar.image} alt={characterstar.name} />
            <div className="DetailsCard-text">
                <div className="DetailsCard-text-description">
                    <h1>{characterstar.name}</h1>
                    <p>{characterstar.description}</p>
                </div>
                <div className="DetailsCard-text-details">
                    <h2>Comics</h2>
                    <div className="comics-list">{details.captainAmericaDetails}</div>
                </div>
            </div>
        </div>
    );
};

export default Prikol;
