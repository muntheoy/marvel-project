
// 1. Определение интерфейсов для типов данных, которые будут получены от API
interface Character {
  id: string;
  name: string;
  description: string;
}

interface ApiResponse {
  data: {
    results: Character[];
  };
}

// 2. Функция для обращения к API и получения списка персонажей
export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse>(${baseURL}/characters, {
      params: {
        apikey: apiKey, // Убедитесь, что ваш API ключ корректен и валиден
      },
    });
    return response.data.data.results;
  } catch (error) {
    // Обработка возможных ошибок при запросе
    console.error(error);
    throw new Error('Failed to fetch characters');
  }
};

import axios from 'axios';
// 3. Компонент Pricol
import React, { useState, useEffect } from 'react';

export const Pricol: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <strong>{character.name}</strong> - {character.description || 'No description'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pricol;