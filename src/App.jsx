import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import "./styles/App.css";

const App = () => {
  return (
    <Router basename="/react-news-app">
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
