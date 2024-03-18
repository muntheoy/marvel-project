import axios from 'axios';

const baseURL = 'https://gateway.marvel.com/v1/public'; // Базовый URL API Marvel
const apiKey = process.env.NODE_ENV;

// Функция для получения списка персонажей
export const getCharacters = async () => {
  try {
    const response = await axios.get(`${baseURL}/characters`, {
      params: {
        apikey: apiKey, // Передаем API ключ как параметр запроса
      },
    });
    return response.data.data.results; // Возвращаем результаты запроса
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};

// Функция для получения деталей персонажа по его идентификатору
export const getCharacterDetails = async (characterId: number) => {
  try {
    const response = await axios.get(`${baseURL}/characters/${characterId}`, {
      params: {
        apikey: apiKey, // Передаем API ключ как параметр запроса
      },
    });
    return response.data.data.results[0]; // Возвращаем результаты запроса
  } catch (error) {
    throw new Error('Failed to fetch character details');
  }
};

// Функция для получения списка комиксов
export const getComics = async () => {
  try {
    const response = await axios.get(`${baseURL}/comics`, {
      params: {
        apikey: apiKey, // Передаем API ключ как параметр запроса
      },
    });
    return response.data.data.results; // Возвращаем результаты запроса
  } catch (error) {
    throw new Error('Failed to fetch comics');
  }
};

// Функция для получения деталей комикса по его идентификатору
export const getComicDetails = async (comicId: number) => {
  try {
    const response = await axios.get(`${baseURL}/comics/${comicId}`, {
      params: {
        apikey: apiKey, // Передаем API ключ как параметр запроса
      },
    });
    return response.data.data.results[0]; // Возвращаем результаты запроса
  } catch (error) {
    throw new Error('Failed to fetch comic details');
  }
};
