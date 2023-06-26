import React from "react";
import sponsorsData from "./../data/sponsors.js";
import { Container } from "react-bootstrap";
import Particle from "./ParticlesBg.jsx";

const Sponsor = () => {
  return (
    <section>
      <div className="absolute right-0 top-0 left-0 -z-10">
        <Particle/>
      <div className='bannerAbout'>
        Sponsors
        </div>
    <Container className="main-sponsors mt-5 mb-5">
      {sponsorsData.map((res) => (
        <div className="nft" key={res.id}>
          <div className="main">
            <a href={res.link} target="_blank" rel="noreferrer">
              <img className="tokenImage" src={res.image} alt="Sponsor" />
            </a>
            <h1 className="text-center">{res.name}</h1>
            <hr />
            <p className="description text-center">{res.desc}</p>
          </div>
        </div>
      ))}
    </Container>
    </div>
    </section>
  );
};

export default Sponsor;
