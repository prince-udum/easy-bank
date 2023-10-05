import React from "react";
import { articles } from "../data";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <h2>Latest Articles</h2>
        <div className="articles-list">
          {articles.map((article) => {
            const { id, image, author, title, info } = article;
            return (
              <article key={id}>
                <img src={image} alt={title} />
                <div className="articles-text">
                  <span className="author">By {author}</span>
                  <h4>{title}</h4>
                  <p>{info}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
