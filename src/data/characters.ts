import { Character } from '../types/ICharacter';
import ironMan from '../assets/iron-man.jpeg';
import captainAmerica from '../assets/captain-america.jpg';
import thor from '../assets/thor.jpeg';


export const characters: Character[] = [
  {
    id: 0,
    name: 'Iron Man',
    description: 'Genius, billionaire, playboy, philanthropist.',
    image: ironMan,
  },
  {
    id: 1,
    name: 'Captain America',
    description: 'Super-soldier, leader of the Avengers.',
    image: captainAmerica
  },
  {
    id: 2,
    name: 'Thor',
    description: 'God of Thunder, prince of Asgard.',
    image: thor
  }
];

export default characters;
