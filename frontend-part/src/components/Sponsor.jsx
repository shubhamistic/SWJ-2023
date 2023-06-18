import React from "react";
import sponsorsData from "./../data/sponsors.js";
import { Container } from "react-bootstrap";

const Sponsor = () => {
  return (
    <section>
      <div className='bannerAbout'>
        Our Sponsors
        </div>
    <Container className="main-sponsors">
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
    </section>
  );
};

export default Sponsor;
