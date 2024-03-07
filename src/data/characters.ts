import { Character } from '../types/ICharacter';
import ironMan from '../assets/iron-man.jpeg';
import captainAmerica from '../assets/captain-america.jpg';
import thor from '../assets/thor.jpeg';
import spiderMan from '../assets/spider-man.jpeg';
import deadpool from '../assets/deadpool.jpeg';
import hulk from '../assets/hulk.jpeg'


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
  },
  {
    id: 3,
    name: 'Spider-Man',
    description: ' High school student with spider-like abilities, fights crime in New York City.',
    image: spiderMan
  },
  {
    id: 4,
    name: 'Deadpool',
    description: 'A wisecracking mercenary with accelerated healing abilities and a penchant for breaking the fourth wall.',
    image: deadpool
  },
  {
    id: 5,
    name: 'Hulk',
    description: 'A scientist exposed to gamma radiation, who transforms into a giant, green rage monster when angry.',
    image: hulk
  },
];

export default characters;
