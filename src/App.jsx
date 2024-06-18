import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </div>
  );
};

export default App;
