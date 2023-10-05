import React from "react";
import HeroImg from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="img-container">
          <img src={HeroImg} alt="phone" className="phone" />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Next generation digital banking</h1>
          <p className="hero-subheading">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn">request invite</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
