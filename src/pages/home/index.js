import React from "react";
import "../home/index.css";
import { ListResearch } from "./components/rendererResearch";
import { useNavigate } from "react-router-dom";

const Home = () => {

  //function untuk ganti page
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `about`; 
    navigate(path);
  }




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

      <section className="our-people">
        <div className="our-people-container">
          <h1>Our People</h1>
          <button onClick={routeChange}>
              <p>Read more</p>
          </button>
        </div>
        <div className="preview-img-wrapper">
            <div className="preview-img" id="ubicon-1"></div>
            <div className="preview-img" id="ubicon-2"></div>
            <div className="preview-img" id="head-of-ubicon"></div>
            <div className="preview-img" id="ubicon-3"></div>
            <div className="preview-img" id="ubicon-4"></div>
          </div>
      </section>
    </div>
  );
};

export default Home;
