import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Characters from '../pages/Characters';
import { characters, ironManDetails } from '../data/characters';
import Comics from '../pages/Comics';
import { comics } from '../data/comics';
import { DetailsCharacter } from '../pages/CharacterDetails';

import { Character, CharacterDetails } from '../types/ICharacter';
import Prikol from '../pages/prikol';





export const AppRouter: React.FC<{}> = () => {
  const { characterId } = useParams();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/characters" element={<Characters character={characters} />}/>
          <Route path="/character/:characterId" element={<Prikol details={[]}  />} />
          <Route path="/comics" element={<Comics comic={comics} />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
};

export default AppRouter;
