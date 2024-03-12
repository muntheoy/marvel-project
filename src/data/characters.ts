import { Character, CharacterDetails } from '../types/ICharacter';

import ironMan from '../assets/iron-man.jpeg';
import captainAmerica from '../assets/captain-america.jpg';
import thor from '../assets/thor.jpeg';
import spiderMan from '../assets/spider-man.jpeg';
import deadpool from '../assets/deadpool.jpeg';
import hulk from '../assets/hulk.jpeg';

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
    description: 'High school student with spider-like abilities, fights crime in New York City.',
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

export const ironManDetails: CharacterDetails[] = [
  { title: 'Ultimate Armor Wars', link: 'https://drawnstories.ru/comics/marvel-comics/iron-man/ultimate-armor-wars' },
  { title: 'Infamous Iron Man', link: 'https://drawnstories.ru/comics/marvel-comics/iron-man/Infamous' },
];

export const captainAmericaDetails: CharacterDetails[] = [
  { title: 'Captain America Reborn', link: 'https://drawnstories.ru/comics/Marvel-Comics/Captain-America/Reborn' },
  { title: 'Captain America vol 2', link: 'https://www.example.com/captain-america-comic2' },
];

export const thorDetailss: CharacterDetails[] = [
  { title: 'Asgardians of the Galaxy', link: 'https://drawnstories.ru/comics/marvel-comics/thor/asgardians-of-the-galaxy' },
  { title: 'Beta Ray Bill', link: 'https://drawnstories.ru/comics/marvel-comics/thor/beta-ray-bill-2021' },
];

export const spiderManicaDetails: CharacterDetails[] = [
  { title: 'Ben Reilly: Spider-Man', link: 'https://drawnstories.ru/comics/marvel-comics/Spider-Man/ben-reilly-spider-man' },
  { title: 'Marvel Action - Spider-Man', link: 'https://drawnstories.ru/comics/marvel-comics/Spider-Man/marvel-action-spider-man' },
];

export const deadpoolDetails: CharacterDetails[] = [
  { title: 'Deadpool merc with a mouth', link: 'https://drawnstories.ru/comics/marvel-comics/deadpool/Deadpool-Merc-With-A-Mouth' },
  { title: 'Deadpool MAX vol.2', link: 'https://drawnstories.ru/comics/marvel-comics/deadpool/Deadpool-MAX-v2' },
];

export const hulkDetails: CharacterDetails[] = [
  { title: 'The Immortal Hulk', link: 'https://drawnstories.ru/comics/marvel-comics/hulk/immortal-hulk' },
  { title: 'The Immortal Hulk - Great Power', link: 'https://drawnstories.ru/comics/marvel-comics/hulk/immortal-hulk-great-power' },
];
