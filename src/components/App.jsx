import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getImages, results } from "../data.js";
import { InitialPage } from "./InitialPage.jsx";
import { GamePage } from "./GamePage.jsx";
import { ResultsPage } from "./ResultsPage.jsx";
export function App() {
  const navigate = useNavigate();
  const [result, setResult] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [gameType, setGameType] = React.useState(null);

  const handleStart = (type) => {
    setImages(getImages(type));
    setGameType(type);
    navigate("/game");
  };

  const handleShowResults = (stepsCount) => {
    setResult(stepsCount);
    navigate("/results");
  };

  const handleReset = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<InitialPage onStart={handleStart} />} />
      <Route
        path="/game"
        element={
          <GamePage
            images={images}
            gameType={gameType}
            onShowResults={handleShowResults}
          />
        }
      />
      <Route
        path="/results"
        element={
          <ResultsPage
            stepsCount={result}
            onResetGame={handleReset}
            results={results}
          />
        }
      />
    </Routes>
  );
}
