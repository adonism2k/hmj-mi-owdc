import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DefaultLayout from "../layouts/DefaultLayout";
import scrollTo from "gatsby-plugin-smoothscroll";
import "../styles/app.scss";

const ProfilePage = () => {
  const missions = [
    {
      mission:
        "Berkontribusi sebagai wadah dan penyalur aspirasi non akademik (bakat minat) dan potensi akademik mahasiswa manajemen informatika di berbagai kegiatan. Baik kegiatan didalam maupun luar kampus.",
    },
    {
      mission:
        "Berperan dalam mempererat kekeluargaan antar sesama pengurus HMJ Manajemen Informatika maupun seluruh masyarakat manajemen informatika.",
    },
    {
      mission:
        "Mengembangkan jiwa profesionalitas dalam pelaksanaan kegiatan HMJ Manajemen Informatika.",
    },
    {
      mission:
        "Mengoptimalkan fungsi-fungsional setiap Departemen dan Menyeleggarakan kegiatan yang mendukung tercapainya Mahasiswa Manajemen Informatika yang aktif.",
    },
    {
      mission:
        "Menjalin hubungan yang baik dengan cara memperluas jaringan dengan civitas akademika dan organisasi atau lembaga lain, baik didalam maupun diluar Manajemen Informatika STMIK AKAKOM Yogyakarta.",
    },
  ];

  return (
    <DefaultLayout>
      <section id="profil">
        <div className="profilInfo">
          <h1>Profil HMJ MI</h1>
          <p>
            HMJ MI merupakan sebuah organisasi kemahasiswaan di STMIK AKAKOM
            yang beranggotakan mahasiswa jurusan manajemen Informatika. HMJ MI
            didirikan di STMIK AKAKOM Yogyakarta pada tanggal 10 Juli 2005. HMJ
            MI bertujuan untuk menghimpun dan mewadahi mahasiswa jurusan
            Manajemen Informatika STMIK AKAKOM yang dalam menyalurkan aspirasi
            dan mengkoordinasikan kegiatan mahasiswa Manajemen Informatika serta
            menjaga nama baik almamater STMIK AKAKOM Yogyakarta.
          </p>
          <button className="btn-primary" onClick={() => scrollTo("#joinUs")}>
            Join Now
          </button>
        </div>
        <StaticImage
          src="../images/profil/ProfilHero4x.png"
          alt="Profil HMJ MI"
          placeholder="blurred"
          className="profilImage"
        />
      </section>

      <section id="visi">
        <StaticImage
          src="../images/profil/visi.png"
          alt="Visi HMJ MI"
          placeholder="blurred"
          className="visiImage"
        />
        <div className="visiInfo">
          <h4>Our Vision</h4>
          <h1>
            Menciptakan Lingkungan Organisasi yang Komunikatif, Kreatif, serta
            Menjunjung Tinggi Profesionalitas dan Kekeluargaan
          </h1>
          <p>
            HMJ MI bertujuan untuk menghimpun dan mewadahi mahasiswa jurusan
            Manajemen Informatika STMIK AKAKOM yang dalam menyalurkan aspirasi
            dan mengkoordinasikan kegiatan mahasiswa Manajemen Informatika serta
            menjaga nama baik almamater STMIK AKAKOM Yogyakarta.
          </p>
        </div>
      </section>
      <section id="misi">
        <div className="misiInfo">
          <h4>Our Mission</h4>
          <div className="missions">
            {missions.map((mission, index) => (
              <div className="mission" key={index}>
                <StaticImage
                  src="../images/Icon/Check.svg"
                  alt={mission.mission}
                  width={40}
                  placeholder="blurred"
                />
                <p>{mission.mission}</p>
              </div>
            ))}
          </div>
        </div>
        <StaticImage
          src="../images/profil/misi.png"
          alt="Misi HMJ MI"
          placeholder="blurred"
          className="misiImage"
        />
      </section>
    </DefaultLayout>
  );
};

export default ProfilePage;
