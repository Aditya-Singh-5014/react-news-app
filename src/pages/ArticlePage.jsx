import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/ArticlePage.css";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find(
      (article) => encodeURIComponent(article.url) === articleId
    )
  );

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticlePage;
