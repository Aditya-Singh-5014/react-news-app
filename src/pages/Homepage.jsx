import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/slices/articlesSlice";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";
import "../styles/HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const [category, setCategory] = useState("tesla");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [category, page, dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "dark-mode";
  };

  return (
    <div className={`home-page ${theme}`}>
      <div className="top-bar">
        <SearchBar onSearch={handleSearch} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <header className="headline">
        <h1>Today's Top News</h1>
      </header>
      <CategoryFilter
        categories={["tesla", "business", "technology", "entertainment"]}
        currentCategory={category}
        onCategoryChange={setCategory}
      />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <motion.div
        className="articles-list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </motion.div>
      <Pagination
        currentPage={page}
        totalPages={5} // Assuming 5 pages for simplicity
        onPageChange={setPage}
      />
    </div>
  );
};

export default HomePage;
