import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import HomeLayout from "../layouts/HomeLayout";
import Features from "../components/Features";
import WorkProgram from "../components/WorkProgram";
import Peoples from "../components/Peoples";
import Articles from "../components/Articles";
import "../styles/app.scss";

const achievementContent = [
  {
    juara: "01",
    title: "Juara 1 Membuat Website",
    desc: "Bertanding di kompetisi OWDC, kami berhasil mendapatkan juara pertama.",
  },
  {
    juara: "02",
    title: "Juara 2 Desain Poster Nasional",
    desc: "Bertanding di kompetisi Telkom, kami berhasil mendapatkan juara kedua.",
  },
  {
    juara: "03",
    title: "Juara 3 Membuat Bisnis Model Canvas",
    desc: "Bertanding di kompetisi ITB, kami berhasil mendapatkan juara ketiga.",
  },
];

const HomePage = () => {
  return (
    <HomeLayout>
      {/* Section Welcome */}
      <section id="welcome">
        <h3>Selamat Datang di</h3>
        <h1>
          HMJ <span>Manajemen Informatika</span>
        </h1>
        <p>
          Ayo berikan hidupmu pengalaman yang menarik, bermanfaat, dan berdampak
          yang positif kepada masyarakat #BersamaHMJMI.
        </p>
        <div id="cta">
          <button
            onClick={() => {
              scrollTo("#joinUs");
            }}
            className="btn-secondary"
          >
            Daftar Sekarang
          </button>
          <Link to="/profil" className="btn-minimal">
            Lihat Profil Kami
          </Link>
        </div>
        <div id="navigateToBottom">
          <button
            onClick={() => {
              scrollTo("#featured");
            }}
          >
            <StaticImage
              src="../images/LooperGroup.svg"
              alt="Navigate to bottom"
              placeholder="blurred"
              layout="fixed"
              width={50}
            />
          </button>
        </div>
        <div id="hand">
          <StaticImage
            src="../images/Hand.svg"
            alt="Hand"
            placeholder="blurred"
            width={200}
          />
        </div>
      </section>

      {/* Section Featured */}
      <section id="featured">
        <h3 className="subtitle">Keunggulan Kami</h3>
        <h1 className="title">Wadah Terbaik Tempatmu Berkembang</h1>
        <p className="desc">Apa yang akan kamu dapat?</p>
        <Features />
      </section>

      {/* Section achievement */}
      <section id="achievement">
        <h3 className="subtitle">Prestasi Kami</h3>
        <div className="achievementsContainer">
          <div className="achievementWrapper">
            {achievementContent.map((achievement, index) => (
              <div className="achievement" key={index}>
                <h1 className="juara">{achievement.juara}</h1>
                <h4 className="title">{achievement.title}</h4>
                <p className="desc">{achievement.desc}</p>
              </div>
            ))}
          </div>
          <StaticImage
            src="../images/prestasi/prestasi.jpg"
            alt="Prestasi Image"
            placeholder="blurred"
            layout="constrained"
            className="prestasiImage"
          />
        </div>
      </section>

      {/* Section Work Program */}
      <section id="workProgram">
        <div className="workProgramDesc">
          <h1 className="title">Program Kerja Kami</h1>
          <p className="desc">
            kami menyelenggarakan beberapa program selama periode terbaru
            2021-2022.
          </p>
        </div>
        <WorkProgram />
      </section>

      {/* Section Peoples */}
      <section id="peoples">
        <h3 className="subtitle">People Behind The Scene</h3>
        <Peoples />
        <Link to="/profil">Lihat Semua</Link>
      </section>

      {/* Section Articles */}
      <section id="articles">
        <h3 className="subtitle">Artikel Terbaru</h3>
        <Link to="/artikel">Lihat Selengkapnya</Link>
        <Articles />
      </section>
    </HomeLayout>
  );
};

export default HomePage;
