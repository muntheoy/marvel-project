import React from 'react';
import '../styles/DetailsPage.css';
import { useParams } from 'react-router-dom';
import { captainAmericaDetails, characters, deadpoolDetails, hulkDetails, ironManDetails, spiderManicaDetails, thorDetail } from '../data/characters';
import { CharacterDetails } from '../types/ICharacter';


const comicsMap: Record<number, CharacterDetails[]> = {
    0: ironManDetails,
    1: captainAmericaDetails,    
    2: thorDetail,
    3: spiderManicaDetails,
    4: deadpoolDetails,
    5: hulkDetails
};


export const DetailsCharacter: React.FC = ({ }) => {
    let { characterId } = useParams();
    const id = parseInt(characterId || '0'); 
    const characterstar = characters.find(c => c.id === id);

    if (!characterstar) {
        return <div>Персонаж не найден</div>; 
    }

    return (
        <div className="DetailsCard">
            <img className="DetailsCard-img" src={characterstar.image} alt={characterstar.name} />
            <div className="DetailsCard-text">
                <div className="DetailsCard-text-description">
                    <h1>{characterstar.name}</h1>
                    <p>{characterstar.description}</p>
                </div>
                <div className="DetailsCard-text-details">
                    <h2>Comics</h2>
                    <div className="comics-list">
                        {comicsMap[id] && comicsMap[id].map((comic, index) => (
                            <a key={index} href={comic.link} className="comics-link">{comic.title}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    };
        

export default DetailsCharacter;