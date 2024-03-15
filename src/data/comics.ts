import thorComicImage from '../assets/thorcomic.avif';
import spiderManComicImage from '../assets/spidercomic.jpg.webp';
import deadpoolComicImage from '../assets/deadpoolcomic.avif';
import hulkComicImage from '../assets/hulkcomic.avif';
import ironManComicImage from '../assets/irohmancomic.jpg';
import captainAmericaComicImage from '../assets/capcomic.jpeg';
import { Comic, ComicrDetails } from '../types/IComic';



export const comics: Comic[] = [
  {
    id: 0,
    name: 'Iron Man: Ultimate Armor Wars',
    description: 'The Ultimate Armor Wars comic storyline featuring Iron Man.',
    image: ironManComicImage,
  },
  {
    id: 1,
    name: 'Captain America: Reborn',
    description: 'The epic Captain America Reborn comic series.',
    image: captainAmericaComicImage
  },
  {
    id: 2,
    name: 'Thor: Asgardians of the Galaxy',
    description: 'Follow Thor in the Asgardians of the Galaxy comic series.',
    image: thorComicImage
  },
  {
    id: 3,
    name: 'Spider-Man: Ben Reilly',
    description: 'Explore the adventures of Spider-Man as Ben Reilly.',
    image: spiderManComicImage
  },
  {
    id: 4,
    name: 'Deadpool: Merc with a Mouth',
    description: 'Join Deadpool in his Merc with a Mouth comic series.',
    image: deadpoolComicImage
  },
  {
    id: 5,
    name: 'Hulk: The Immortal Hulk',
    description: 'Discover the saga of the Immortal Hulk in this comic series.',
    image: hulkComicImage
  },
];

export const ironManComicDetails: ComicrDetails[] = [
  { title: 'Ultimate Armor Wars Part 1', link: 'https://drawnstories.ru/comics/marvel-comics/iron-man/ultimate-armor-wars/part-1' },
  { title: 'Ultimate Armor Wars Part 2', link: 'https://drawnstories.ru/comics/marvel-comics/iron-man/ultimate-armor-wars/part-2' },
  { title: 'Ultimate Armor Wars Part 3', link: 'https://drawnstories.ru/comics/marvel-comics/iron-man/ultimate-armor-wars/part-3' },
  
];

export const captainAmericaComicDetails: ComicrDetails[] = [
  { title: 'Captain America Reborn Part 1', link: 'https://drawnstories.ru/comics/Marvel-Comics/Captain-America/Reborn/part-1' },
  { title: 'Captain America Reborn Part 2', link: 'https://drawnstories.ru/comics/Marvel-Comics/Captain-America/Reborn/part-2' },
  
];

export const thorComicDetails: ComicrDetails[] = [
  { title: 'Asgardians of the Galaxy Part 1', link: 'https://drawnstories.ru/comics/marvel-comics/thor/asgardians-of-the-galaxy/part-1' },
  { title: 'Asgardians of the Galaxy Part 2', link: 'https://drawnstories.ru/comics/marvel-comics/thor/asgardians-of-the-galaxy/part-2' },
  
];

export const spiderManComicDetails: ComicrDetails[] = [
  { title: 'Ben Reilly: Spider-Man Part 1', link: 'https://drawnstories.ru/comics/marvel-comics/Spider-Man/ben-reilly-spider-man/part-1' },
  { title: 'Ben Reilly: Spider-Man Part 2', link: 'https://drawnstories.ru/comics/marvel-comics/Spider-Man/ben-reilly-spider-man/part-2' },
  
];

export const deadpoolComicDetails: ComicrDetails[] = [
  { title: 'Deadpool merc with a mouth Part 1', link: 'https://drawnstories.ru/comics/marvel-comics/deadpool/Deadpool-Merc-With-A-Mouth/part-1' },
  { title: 'Deadpool merc with a mouth Part 2', link: 'https://drawnstories.ru/comics/marvel-comics/deadpool/Deadpool-Merc-With-A-Mouth/part-2' },
  
];

export const hulkComicDetails: ComicrDetails[] = [
  { title: 'The Immortal Hulk Part 1', link: 'https://drawnstories.ru/comics/marvel-comics/hulk/immortal-hulk/part-1' },
  { title: 'The Immortal Hulk Part 2', link: 'https://drawnstories.ru/comics/marvel-comics/hulk/immortal-hulk/part-2' },
  
];
