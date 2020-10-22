import React from "react";

import Auth from "../Auth";

import logo from "../../assets/logo.svg";

function Header({ classes }) {
  return (
    <div className={classes.header}>
      <h4 className={classes.header__name}>moments</h4>
      <img src={logo} alt="logo" className={classes.header__logo} />
      <Auth />
    </div>
  );
}

export default Header;
