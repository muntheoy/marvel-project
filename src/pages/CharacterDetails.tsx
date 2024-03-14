import React from "react";
import '../styles/DetailsPage.css'
import { useParams } from 'react-router-dom';
import { Character, CharacterDetails } from "../types/ICharacter";

interface CharacterDetailsProps {
    character: Character;
    details: CharacterDetails[];
}

export const DetailsCharacter: React.FC<CharacterDetailsProps> = ({ character, details }) => {

    const { id } = useParams();

    

    const comicsList = details.map((detail, index) => (
        <a key={index} href={detail.link} className="comics-link">{detail.title}</a>
    ));

    return (
        <div className="DetailsCard">
            <div>hui</div>
            <img className="DetailsCard-img" src={character.image} alt={character.name} />
            <div className="DetailsCard-text">
                <div className="DetailsCard-text-description">
                    <h1>{character.name}</h1>
                    <p>{character.description}</p>
                </div>
                <div className="DetailsCard-text-details">
                    <h2>Comics</h2>
                    <div className="comics-list">{comicsList}</div>
                </div>
            </div>
        </div>
    );
}
