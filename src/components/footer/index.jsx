import React from "react";
import { Footercss } from "./styles";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Footercss>
      <footer>
        <ul className="lista-footer">
          <FaFacebook className="lista" />
          <FaInstagramSquare className="lista" />
          <FaTwitter className="lista" />
          <FaGithub className="lista" />
        </ul>
        <br />
        <span className="footer-span">
          @sem fins empresariais(apenas usando infomações para estudo e prática)
        </span>
      </footer>
    </Footercss>
  );
};

export default Footer;
