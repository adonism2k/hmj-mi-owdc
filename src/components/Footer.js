import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Hand from "../images/Hand.svg";
import ArrowUp from "../images/LooperGroup.svg";
import InstagramIcon from "../images/Icon/InstagramIcon.svg";
import TwitterIcon from "../images/Icon/TwitterIcon.svg";
import LinkedinIcon from "../images/Icon/LinkedinIcon.svg";
import scrollTo from "gatsby-plugin-smoothscroll";

const Footer = () => {
  const socialMedia = [
    {
      icon: InstagramIcon,
      platform: "Instagram",
      username: "@HMJ.MI",
      link: "https://www.instagram.com/adonism2k/",
    },
    {
      icon: TwitterIcon,
      platform: "Twitter",
      username: "@HMJ.MI",
      link: "https://www.twitter.com/adonisme2k/",
    },
    {
      icon: LinkedinIcon,
      platform: "Linkedin",
      username: "@HMJ.MI",
      link: "https://www.linkedin.com/in/adonisme2k/",
    },
  ];

  return (
    <footer id="footer">
      <section id="joinUs">
        <img src={Hand} alt="Hand" className="hand" width={200} />
        <button
          className="goTopBtn"
          onClick={() => {
            scrollTo(".navbar");
          }}
        >
          <img
            src={ArrowUp}
            alt="Navigate To Top"
            className="goTop"
            width={60}
          />
        </button>
        <h1>tunggu apa lagi?</h1>
        <p>
          Jangan sia-siakan masa muda mu, daftar sekarang untuk mendapatkan
          pengalaman yang luar biasa #bersamaHMJMI
        </p>
        <div id="input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan email kamu disini"
          />
          <button type="submit">Submit</button>
        </div>
      </section>
      <section id="footer">
        <div className="logoWrapper">
          <StaticImage
            src="../images/logo/logo-HIMARAKSI.png"
            alt="Logo HIMARAKSI"
            placeholder="blurred"
            layout="fixed"
            width={70}
            height={70}
          />
          <h3>HIMARAKSI</h3>
        </div>
        <div className="footerInfo">
          <div className="address">
            <h5 className="title">Alamat</h5>
            <p className="content">
              STMIK AKAKOM Yogyakarta Jl. Raya Janti Karang Jambe No. 143
              Yogyakarta 55198, Indonesia <br />
              <br />
              Senin / Jumat 08:00 - 15.00 / 10:00 - 14:00
            </p>
          </div>
          <div className="socialContainer">
            <h5 className="title">Social</h5>
            <div className="socialWrapper">
              {socialMedia.map((social, index) => {
                const { icon, platform, username, link } = social;
                return (
                  <div id={platform} className="social" key={index}>
                    <img src={icon} alt={username} />
                    <a href={link}>{username}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="menu">
            <h5 className="title">Menu</h5>
            <nav className="menus">
              <Link to="/home">Home</Link>
              <Link to="/profil">Profil</Link>
              <Link to="/departemen">Departemen</Link>
              <Link to="/artikel">Artikel</Link>
            </nav>
          </div>
        </div>
      </section>
      <section id="copyright">
        <p className="copyright">© 2022 HMJ MI | STMIK AKAKOM Yogyakarta</p>
        <p className="sponsor">brought to you by ADNS x Trakent</p>
      </section>
    </footer>
  );
};

export default Footer;
