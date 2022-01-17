import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LeftIcon from "../images/Icon/Left.svg";
import RightIcon from "../images/Icon/Right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const WorkProgram = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "program_kerja" } }
        sort: { fields: name }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const workProgramContent = [
    {
      image: getImage(data.allFile.nodes[0]),
      date: "17 Januari 2022",
      title: "Poster Design Competition 2021",
      desc: "merupakan lomba design poster yang mana dapat diikuti oleh siswa SMK/SMA sederajat di seluruh Indonesia.",
    },
    {
      image: getImage(data.allFile.nodes[1]),
      date: "1 Februari 2022",
      title: "Online Web Design Competition 2021",
      desc: "merupakan lomba design web secara online yang mana dapat diikuti oleh siswa SMK/SMA sederajat di seluruh Indonesia.",
    },
    {
      image: getImage(data.allFile.nodes[2]),
      date: "9 Maret 2022",
      title: "Bakti Sosial Kepada Masyarakat Sekitar",
      desc: "Untuk membantu masyarakat yang berdampak Covid-19, maka kami membuat program kerja berupa bakti sosial.",
    },
  ];

  return (
    <div className="workProgramContainer">
      <nav className="navigationWrapper">
        <img
          src={LeftIcon}
          alt="Left Icon"
          className="navigateWorkProgram"
          id="navigateToLeft"
        />
        <img
          src={RightIcon}
          alt="Right Icon"
          className="navigateWorkProgram"
          id="navigateToRight"
        />
      </nav>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: "#navigateToLeft",
          nextEl: "#navigateToRight",
        }}
        slidesPerView={"auto"}
        spaceBetween={20}
        onAfterInit={() =>
          (document.getElementById("navigateToLeft").style.opacity = "0.5")
        }
        onReachBeginning={() =>
          (document.getElementById("navigateToLeft").style.opacity = "0.5")
        }
        onReachEnd={() =>
          (document.getElementById("navigateToRight").style.opacity = "0.5")
        }
        onSlideNextTransitionStart={() =>
          (document.getElementById("navigateToLeft").style.opacity = "1")
        }
        onSlidePrevTransitionStart={() =>
          (document.getElementById("navigateToRight").style.opacity = "1")
        }
      >
        {workProgramContent.map((workProgram, index) => {
          const { image, date, title, desc } = workProgram;
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={isActive ? "workProgram active" : "workProgram"}
                >
                  <GatsbyImage
                    image={image}
                    alt={title}
                    className="workProgramImage"
                  />
                  <div className="workProgramInfo">
                    <p className="workProgramDate">{date}</p>
                    <h2 className="workProgramTitle">{title}</h2>
                    <p className="workProgramDesc">{desc}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkProgram;
