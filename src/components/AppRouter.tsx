import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Characters from '../pages/Characters';
import { characters } from '../data/characters';
import Comics from '../pages/Comics';
import { comics } from '../data/comics';

// const comicsMap = {
//   0: ironManComics,
//   1: captainAmericaComics,
//   2: thorComics,
//   3: spiderManicaComics,
//   4: deadpoolComics,
//   5: hulkComics
// };

const AppRouter = () => {
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
          <Route path="/characters" element={<Characters character={characters} />} />
          <Route path="/comics" element={<Comics comic={comics} />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
};

export default AppRouter;
