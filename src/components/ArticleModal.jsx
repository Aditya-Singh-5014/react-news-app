import React from "react";
import { motion } from "framer-motion";
import "../styles/ArticleModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import imageNotFound from "../assets/image-not-found.png";

const ArticleModal = ({ article, onClose, theme }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <button className="close-button" onClick={onClose}>
          {theme === "light" ? (
            <IoIosCloseCircleOutline size={24} />
          ) : (
            <IoMdCloseCircle size={24} />
          )}
        </button>
        <img
          src={urlToImage || imageNotFound}
          alt={title}
          className="modal-image"
        />
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-link"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="read-more-button"
          >
            Read More
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default ArticleModal;
