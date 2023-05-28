import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import User from "./../assets/user.png";
import teamsData from "./../data/team";

const TeamCard = () => {
  return (
    <div className="container">
      <h2 className="pt-5 text-center" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}>SWJ</span>Team
      </h2>
      <div className="card-collection">
        {teamsData.map((res) => (
          <div className="card-main">
            <div className="card-image">
              <img
                width={"150px"}
                height={"150px"}
                src={res.image !== "" ? res.image : User}
                className="rounded"
                alt=""
                srcset=""
              />
            </div>
            <br />
            <h5 className="text-center text-success">{res.name}</h5>
            <hr />
            <p className="text-center text-success">{res.position}</p>
            <div className="team-desc">
              {res.facebook !== "" ? (
                <a href={res.facebook} target="_blank" rel="noreferrer">
                  <i className="mx-1">
                    <FaFacebook color="green" />
                  </i>
                </a>
              ) : null}
              {res.instagram !== "" ? (
                <a href={res.instagram} target="_blank" rel="noreferrer">
                  <i className="mx-1">
                    <FaInstagram color="green" />
                  </i>
                </a>
              ) : null}
              {res.twitter !== "" ? (
                <a href={res.twitter} target="_blank" rel="noreferrer">
                  <i className="mx-1">
                    <FaTwitter color="green" />
                  </i>
                </a>
              ) : null}
              {res.linkedin !== "" ? (
                <a href={res.linkedin} target="_blank" rel="noreferrer">
                  <i className="mx-1">
                    <FaLinkedin color="green" />
                  </i>
                </a>
              ) : null}
              {res.github !== "" ? (
                <a href={res.github} target="_blank" rel="noreferrer">
                  <i className="mx-1">
                    <FaGithub color="green" />
                  </i>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <h2 className="pt-5 text-center" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}>SWJ</span>More Teams
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "ccmedia" ? (
            <div className="card-main">
              <div className="card-image">
                <img
                  width={"150px"}
                  height={"150px"}
                  src={res.image !== "" ? res.image : User}
                  className="rounded-circle"
                  alt=""
                  srcset=""
                />
              </div>
              <br />
              <h5 className="text-center text-success">{res.name}</h5>
              <hr />
              <p className="text-center text-success">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="green" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="green" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="green" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="green" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="green" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TeamCard;
