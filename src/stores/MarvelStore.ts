import { makeAutoObservable } from "mobx";
import { Character } from "../types/ICharacter";
import { Comic } from "../types/IComic";

// Подключаем интерфейсы из файла types.ts

class MarvelStore {
    characters: Character[] = [];
    comics: Comic[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    // Методы для обновления состояния стора
    setCharacters(characters: Character[]) {
        this.characters = characters;
    }

    setComics(comics: Comic[]) {
        this.comics = comics;
    }
}

export default new MarvelStore();
