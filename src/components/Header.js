import React from "react";
import Title from "./Title";
const Header = (props) => {
  return (
    <header className={props.className}>
      <Title name={props.name} />
    </header>
  );
};

export default Header;
