import React from "react";
import "./header.scss";
import { Logo } from "../../assets/svg";

const Header = ({ score }) => {
  return (
    <header>
      <img src={Logo} alt="" />
      <section className={"score__container"}>
        <h3>Score</h3>
        <p className={"score"}>{score}</p>
      </section>
    </header>
  );
};

export default Header;
