import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#home");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
