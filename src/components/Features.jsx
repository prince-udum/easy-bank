import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Why choose Easybank?</h2>
        <p className="features-subheading">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="features-list">
          {features.map((item) => {
            const { icon, id, title, info } = item;
            return (
              <article key={id}>
                <img src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{info}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
