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
            <div className='bannerAbout'>
        Our Sponsors
        </div>

      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Convenors
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "convenor" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Sponsorship and Finance
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "sponsorship and finance" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Social Media
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "social media" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Event Productions
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "event productions" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Marketing
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "marketing" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Media
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "media" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Event Operations
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "event operations" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Design
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "design" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Curations and Hospitality
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "curations and hospitality" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Operations
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "operations" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Promotions
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "promotions" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Coverage
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "coverage" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Content
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "content" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
                    </i>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="pt-5 text-center noScroll" style={{ fontSize: "2rem" }}>
        <span style={{ color: "#000" }}></span>Web Development
      </h2>
      <div className="card-collection">
        {teamsData.map((res) =>
          res.team.toLowerCase() === "web development" ? (
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
              <h5 className="text-center noScroll text-warning">{res.name}</h5>
              <hr />
              <p className="text-center text-warning">{res.position}</p>
              <div className="team-desc">
                {res.facebook !== "" ? (
                  <a href={res.facebook} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaFacebook color="black" />
                    </i>
                  </a>
                ) : null}
                {res.instagram !== "" ? (
                  <a href={res.instagram} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaInstagram color="black" />
                    </i>
                  </a>
                ) : null}
                {res.twitter !== "" ? (
                  <a href={res.twitter} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaTwitter color="black" />
                    </i>
                  </a>
                ) : null}
                {res.linkedin !== "" ? (
                  <a href={res.linkedin} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaLinkedin color="black" />
                    </i>
                  </a>
                ) : null}
                {res.github !== "" ? (
                  <a href={res.github} target="_blank" rel="noreferrer">
                    <i className="mx-1">
                      <FaGithub color="black" />
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
