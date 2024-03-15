import React from 'react';
import { ComicrDetails } from '../types/IComic';
import { captainAmericaComicDetails, comics, deadpoolComicDetails, hulkComicDetails, spiderManComicDetails, thorComicDetails } from '../data/comics';
import { useParams } from 'react-router-dom';




const comicsMap: Record<number, ComicrDetails[]> = {
    0: spiderManComicDetails,
    1: captainAmericaComicDetails,    
    2: thorComicDetails,
    3: spiderManComicDetails,
    4: deadpoolComicDetails,
    5: hulkComicDetails
};


export const DetailsComic: React.FC = ({ }) => {
    let { comicsId } = useParams();
    const id = parseInt(comicsId || '0'); 
    const comicrstar = comics.find(c => c.id === id);

    if (!comicrstar) {
        return <div>Персонаж не найден</div>; 
    }

    return (
        <div className="DetailsCard">
            <img className="DetailsCard-img" src={comicrstar.image} alt={comicrstar.name} />
            <div className="DetailsCard-text">
                <div className="DetailsCard-text-description">
                    <h1>{comicrstar.name}</h1>
                    <p>{comicrstar.description}</p>
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
        

export default DetailsComic;