import React from "react";
import sponsorsData from "./../data/sponsors.js";

const Sponsor = () => {
  return (
    <div className="main-sponsors">
      {sponsorsData.map((res) => (
        <div class="nft">
          <div class="main">
            <a href={res.link} target="_blank" rel="noreferrer">
              <img class="tokenImage" src={res.image} alt="Sponsor" />
            </a>
            <h2 className="text-center text-success">{res.name}</h2><hr />
            <p class="description text-center text-success">{res.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsor;
