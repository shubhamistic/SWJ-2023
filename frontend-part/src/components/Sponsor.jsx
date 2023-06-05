import React from "react";
import sponsorsData from "./../data/sponsors.js";

const Sponsor = () => {
  return (
    <div className="main-sponsors">
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
    </div>
  );
};

export default Sponsor;
