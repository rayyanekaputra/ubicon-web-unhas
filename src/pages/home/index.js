import React from "react";
import "../home/index.css";
import { ListResearch } from "./components/rendererResearch";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="logo-ubicon">
          <img src="/logo192.png" alt="logo lab ubicon"></img>
        </div>
        <h1>Ubicon Lab</h1>
        <h2>Ubiquitous Computing & Networking Lab.</h2>
        <p>@HASANUDDIN UNIVERSITY </p>
      </section>
      <div className="carousel-running-container">
        {/* infinite slider, duplikat supaya seamless */}
        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>
      </div>
      <section className="research-type">
        <h1>Connecting Devices with Our Research</h1>
        <p className="p1">
          Our lab have multiple concentration that surrounds internet
          engineering
        </p>

        <ul className="list-research-wrapper">
          <ListResearch />
        </ul>
      </section>
    </div>
  );
};

export default Home;
