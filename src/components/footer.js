import React from "react";

const Footer = ({ theme }) => {
  return (
    <div className={`footer footer-${theme}`}>
      <p className={`footer-text footer-text-${theme}`}>
        Copyright @ 2024 -- neurocraft.io
      </p>
    </div>
  );
};

export default Footer;
