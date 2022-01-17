import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Link } from "gatsby";

const Navbar = (props) => {
  return (
    <div
      id={props.type === "home" ? "homeNavbar" : "defaultNavbar"}
      className="navbar"
    >
      <div className="logoWrapper">
        <Link to="/">
          <StaticImage
            src="../images/logo/logo-HIMARAKSI.png"
            alt="Logo HIMARAKSI"
            placeholder="blurred"
            layout="fixed"
            width={60}
            height={60}
          />
        </Link>
        <Link to="/">
          <h3>himaraksi</h3>
        </Link>
      </div>
      <nav id="menu">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/profil" activeClassName="active">
          Profil
        </Link>
        <Link to="/departemen" activeClassName="active">
          Departemen
        </Link>
        <Link to="/artikel" activeClassName="active">
          Artikel
        </Link>
      </nav>
      <nav id="contact">
        <button
          onClick={() => {
            scrollTo("#joinUs");
          }}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
