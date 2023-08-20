import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Devarsh</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={ME} alt="Image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
