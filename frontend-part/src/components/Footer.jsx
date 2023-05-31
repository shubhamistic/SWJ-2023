import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarker,
  FaPhoneAlt,
  FaMailBulk,
  FaRegAddressCard,
} from "react-icons/fa";
import logo from "./../assets/logo-original.png";
import footerData from "./../data/footer";

const Footer = () => {
  return (
    <div className="border-top border-success footerStyle" style={{ borderTop: "2px solid #000"}}>
      <footer className="text-center text-lg-start text-dark">
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ height: "150px" }}
              >
                <img src={logo} height="120" alt="" loading="lazy" />
              </div>
              <p className="text-center">
                <span style={{ color: "#000" }}></span>
                StartUp Weekend Jaipur
              </p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a
                    className="text-light px-2"
                    target="_blank"
                    rel="noreferrer"
                    href={footerData[3][0]}
                  >
                    <i>
                      <FaFacebook color="green" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-light px-2"
                    target="_blank"
                    rel="noreferrer"
                    href={footerData[3][1]}
                  >
                    <i>
                      <FaInstagram color="green" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark px-2"
                    target="_blank"
                    rel="noreferrer"
                    href={footerData[3][2]}
                  >
                    <i>
                      <FaTwitter color="green" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark px-2"
                    target="_blank"
                    rel="noreferrer"
                    href={footerData[3][3]}
                  >
                    <i>
                      <FaLinkedin color="green" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 text-success footerTitles" style={{ color: "#000" }}>
                Links
              </h5>

              <ul className="list-unstyled">
                {footerData[2].map((res) => (
                  <>
                    <li className="mb-2">
                      <a
                        href={res.link}
                        className="text-dark text-decoration-none"
                      >
                        {res.text}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 text-success footerTitles" style={{ color: "#000" }}>
                Contact
              </h5>

              <ul className="list-unstyled ">
                {footerData[0].map((res) => (
                  <>
                    <li>
                      <p>
                        <i>
                          <FaRegAddressCard color="green" />
                        </i>{" "}
                        {res.name}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i>
                          <FaPhoneAlt color="green" />
                        </i>{" "}
                        {res.phone}
                      </p>
                    </li>
                    {/* <li>
                                        <p>
                                            <i><FaMailBulk color='green' /></i> {res.email}
                                        </p>
                                    </li> */}
                  </>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase mb-4 text-success footerTitles" style={{ color: "#000" }}>
                Address
              </h5>
              <ul className="list-unstyled ">
                <li>
                  <p>
                    <i>
                      <FaMapMarker color="green" />
                    </i>
                    {footerData[1][0].address}
                  </p>
                </li>
                <li>
                  <p>
                    <i>
                      <FaPhoneAlt color="green" />
                    </i>{" "}
                    {footerData[1][0].phone}
                  </p>
                </li>
                <li>
                  <p>
                    <i>
                      <FaMailBulk color="green" />
                    </i>{" "}
                    {footerData[1][0].email}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3 bg-success border-top border-success"
        >
          © 2023 <span style={{ color: "#000" }}>StartUp Weekend Jaipur</span>
          @ Manipal University Jaipur
        </div>
      </footer>
    </div>
  );
};

export default Footer;
