import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ArticleCard.css";
import ArticleModal from "./ArticleModal";
import imageNotFound from "../assets/image-not-found.png";

const ArticleCard = ({ article, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, url, urlToImage } = article;

  return (
    <>
      <motion.div
        className="article-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={urlToImage || imageNotFound}
          alt={title}
          onError={(e) => (e.target.src = imageNotFound)}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
      {isModalOpen && (
        <ArticleModal
          article={article}
          onClose={() => setIsModalOpen(false)}
          theme={theme}
        />
      )}
    </>
  );
};

export default ArticleCard;
