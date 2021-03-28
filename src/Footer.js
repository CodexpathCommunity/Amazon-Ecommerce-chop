import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      DivBuilder projects &copy; {new Date().getFullYear()} all rights reserved
    </div>
  );
}

export default Footer;
