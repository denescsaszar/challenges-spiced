import React from "react";
import Image from "./Image";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <a href="#">
      <Image imageSrc={logo} imageAlt={"logo"} />
    </a>
  );
}
