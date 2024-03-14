import React from "react";
import '../styles/DetailsPage.css'
import { Comic, ComicrDetails } from "../types/IComic";

interface ComicDetailsProps {
    comic: Comic;
    details: ComicrDetails[];
}

export const DetailsComic: React.FC<ComicDetailsProps> = ({ comic, details }) => {

    const comicsList = details.map((detail, index) => (
        <a key={index} href={detail.link} className="comics-link">{detail.title}</a>
    ));

    return (
        <div className="DetailsCard">
            <img className="DetailsCard-img" src={comic.image} alt={comic.name} />
            <div className="DetailsCard-text">
                <div className="DetailsCard-text-description">
                    <h1>{comic.name}</h1>
                    <p>{comic.description}</p>
                </div>
                <div className="DetailsCard-text-details">
                    <h2>Comics</h2>
                    <div className="comics-list">{comicsList}</div>
                </div>
            </div>
        </div>
    );
}
export{}