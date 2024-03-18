import "./App.css";
import { characters, ironManDetails } from "./data/characters";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import { comics } from "./data/comics";
import DetailsCharacter from "./pages/DetailsCharacter";
import DetailsComic from "./pages/DetailsComic";
import Pricol from "./components/Prikol";

function App() {
  return (
    <Router>
      <div className="App">
        <Pricol/>
        {/* <div className="up">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/characters" />} // Указываем маршрут по умолчанию на страницу с персонажами
            />
            <Route
              path="/characters"
              element={<Characters character={characters} />}
            />
            <Route
              path="/character/:characterId"
              element={<DetailsCharacter />}
            />
            <Route path="/comics" element={<Comics comic={comics} />} />
            <Route
              path="/comics/:comicsId"
              element={<DetailsComic />}
            />
          </Routes>
        </div>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
