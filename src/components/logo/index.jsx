import React from 'react';
import logo from "./logo.svg";

const handleClick = () => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({'_tui_product': 'avia'});
};

export const Logo = () => {
  return (
    <div onClick={handleClick}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    )
};

export default Logo;
